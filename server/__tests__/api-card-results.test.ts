import request from "supertest";
import express from "express";
import { mocked } from "ts-jest/utils";
import { json as jsonParser } from "body-parser";
import { emptyDetails } from "../../__test__/mock/CustomerDetails.mock";
import { EmploymentKind, ICustomerDetails } from "../../shared/interfaces";
import { CardType } from "../../shared/constants/card";
import { LIQUID_CARD_ANNUAL_INCOME } from "../../shared/RuleEngine/rules/LiquidCardRule";
import { withCardApi, API_ROUTES } from "../api/card";
import { cards, getCardById } from "../store/cards";
import CardService from "../services/CardService";

const app = express();
app.use(jsonParser());
withCardApi(app);

jest.mock("../services/CardService", () => {
    return jest.fn().mockImplementation(() => {
        return {
            getCards: () => {
                return cards;
            },
        };
    });
});

const MockedCardService = mocked(CardService, true);

describe(`when making requests to ${API_ROUTES.GET_CARD}`, () => {
    beforeEach(() => {
        MockedCardService.mockClear();
    });

    it("should respond with card data [GET]", (done) => {
        request(app).get(API_ROUTES.GET_CARD).expect("Content-Type", /json/).expect(
            200,
            {
                result: cards,
            },
            done,
        );
    });

    it("should respond with available cards [POST]", (done) => {
        const data: ICustomerDetails = {
            ...emptyDetails,
            annualIncome: LIQUID_CARD_ANNUAL_INCOME + 1,
            employment: EmploymentKind.Student,
        };

        request(app)
            .post(API_ROUTES.POST_CARD)
            .send(data)
            .set("Accept", "application/json")
            .expect(
                200,
                {
                    result: [
                        getCardById(CardType.Student),
                        getCardById(CardType.Anywhere),
                        getCardById(CardType.Liquid),
                    ],
                },
                done,
            );
    });
});
