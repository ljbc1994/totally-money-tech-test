import { Express } from "express";
import { ICustomerDetails, IApiResult, ICreditCard } from "../../shared/interfaces";
import { processRules } from "../../shared/RuleEngine";
import CardService from "../services/CardService";
import { CARD_SERVICE_API_URL } from "../constants/config";

export const API_ROUTES = {
    GET_CARD: "/api/card",
    POST_CARD: "/api/card",
};

const cardService = new CardService({ url: CARD_SERVICE_API_URL });

export function withCardApi(api: Express): void {
    api.get<never, IApiResult<ICreditCard[]>>(API_ROUTES.GET_CARD, async (_, res) => {
        try {
            const cards = await cardService.getCards();
            return res.json({ result: cards });
        } catch (ex) {
            res.status(500);
            return res.json({ error: { message: "Failed to retrieve cards" } });
        }
    });

    api.post<never, IApiResult<ICreditCard[]>, ICustomerDetails>(API_ROUTES.POST_CARD, async (req, res) => {
        try {
            const details = req.body;

            // NOTE: Back end validation using mongoose?

            if (details == null || Object.keys(details).length === 0) {
                res.status(500);
                return res.json({ error: { message: "No customer details were provided" } });
            }

            const cards = await cardService.getCards();
            const allowedCardIds = processRules(details);
            const availableCards = cards.filter((card) => allowedCardIds.includes(card.id));

            return res.json({ result: availableCards });
        } catch (ex) {
            res.status(500);
            return res.json({ error: { message: "Failed to process available cards" } });
        }
    });
}
