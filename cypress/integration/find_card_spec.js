const validCustomerDetails = require("../fixtures/customer-details/customer-details-valid.json");
const invalidCustomerDetails = require("../fixtures/customer-details/customer-details-invalid.json");
const { performSearch } = require("./utilities/fields");

describe("when customer details form is filled out", () => {
    validCustomerDetails.forEach((details) => {
        it(`should successfully performs a search with customer details (${details.description})`, () => {
            cy.visit("/");

            performSearch(details);

            cy.url().should("include", "/results");
        });
    });

    invalidCustomerDetails.forEach((details) => {
        it(`should fails to perform a search with invalid customer details (${details.description})`, () => {
            cy.visit("/");

            performSearch(details);
            cy.url().should("eq", Cypress.config().baseUrl + "/");
        });
    });
});
