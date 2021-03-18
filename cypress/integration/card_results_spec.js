const validCustomerDetails = require("../fixtures/customer-details/customer-details-valid.json");
const { performSearch } = require("./utilities/fields");

const elements = {
    cardSelect: "[data-testid='card-select']",
    totalCredit: "[data-testid='total-credit']",
};

describe("when viewing the card results page", () => {
    it("should select the cards + calculate the total credit + hide the total credit", () => {
        const cards = [
            {
                apr: 33.9,
                balanceTransferOfferDuration: 0,
                creditAvailable: 300,
                id: "anywhere",
                name: "Anywhere Card",
                purchaseOfferDuration: 0,
            },
            {
                id: "student-life",
                name: "Student Life",
                balanceTransferOfferDuration: 0,
                purchaseOfferDuration: 6,
                creditAvailable: 1200,
                apr: 18.9,
            },
        ];

        cy.intercept("POST", "/api/card", {
            statusCode: 200,
            body: {
                result: cards,
            },
        });

        cy.visit("/");

        performSearch(validCustomerDetails[0]);

        cy.get(elements.cardSelect).click({ multiple: true });

        cy.get(elements.totalCredit).contains(cards[0].creditAvailable + cards[1].creditAvailable);

        cy.get(elements.cardSelect).click({ multiple: true });

        cy.get(elements.totalCredit).should("not.exist");
    });
});
