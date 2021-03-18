import { emptyDetails } from "../../__test__/mock/CustomerDetails.mock";
import { CardType } from "../constants/card";
import { EmploymentKind, ICustomerDetails } from "../interfaces/ICustomerDetails";
import { RuleEngine } from "../RuleEngine/RuleEngine";
import { rules } from "../RuleEngine/rules";
import { LIQUID_CARD_ANNUAL_INCOME } from "../RuleEngine/rules/LiquidCardRule";
import { StudentLifeCardRule } from "../RuleEngine/rules/StudentLifeCardRule";

interface IRuleTest {
    title: string;
    data: ICustomerDetails;
    resultsIn: string[];
}

const ruleTests: IRuleTest[] = [
    {
        title: `if annual income is over £${LIQUID_CARD_ANNUAL_INCOME}`,
        data: { ...emptyDetails, annualIncome: LIQUID_CARD_ANNUAL_INCOME + 1 },
        resultsIn: [CardType.Anywhere, CardType.Liquid],
    },
    {
        title: "if annual income is equal to or less than £16,000",
        data: { ...emptyDetails, annualIncome: LIQUID_CARD_ANNUAL_INCOME },
        resultsIn: [CardType.Anywhere],
    },
    {
        title: "if any details are provided",
        data: { ...emptyDetails },
        resultsIn: [CardType.Anywhere],
    },
    {
        title: "if the employment kind is full time",
        data: { ...emptyDetails, employment: EmploymentKind.FullTime },
        resultsIn: [CardType.Anywhere],
    },
    {
        title: "if the employment kind is student",
        data: { ...emptyDetails, employment: EmploymentKind.Student },
        resultsIn: [CardType.Anywhere, CardType.Student],
    },
    {
        title: `if the employment kind is student and annual income is over £${LIQUID_CARD_ANNUAL_INCOME}`,
        data: { ...emptyDetails, employment: EmploymentKind.Student, annualIncome: LIQUID_CARD_ANNUAL_INCOME + 1000 },
        resultsIn: [CardType.Anywhere, CardType.Liquid, CardType.Student],
    },
];

describe("when running rules for rule engine", () => {
    ruleTests.forEach(({ title, data, resultsIn }) => {
        test(`should allow (${resultsIn.join(", ")}) cards ${title}`, () => {
            expect(new RuleEngine({ rules }).process({ details: data })).toEqual(resultsIn);
        });
    });

    test("should throw an error if no rules are provided", () => {
        expect(() => {
            new RuleEngine(null);
        }).toThrow();
    });

    test("should throw an error if there are duplicate rules", () => {
        expect(() => {
            const duplicateRules = [new StudentLifeCardRule({ id: CardType.Student }), ...rules];
            new RuleEngine({ rules: duplicateRules });
        }).toThrow();
    });

    test("should throw an error if no process data is provided", () => {
        expect(() => {
            new RuleEngine({ rules }).process(null);
        }).toThrow();
    });

    test("should throw an error if no customer details is provided", () => {
        expect(() => {
            new RuleEngine({ rules }).process({ details: null });
        }).toThrow();
    });
});
