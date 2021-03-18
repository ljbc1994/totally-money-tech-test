const fields = {
    firstName: "input[name='firstName']",
    lastName: "input[name='lastName']",
    dobDay: "input[name='dob-day']",
    dobMonth: "input[name='dob-month']",
    dobYear: "input[name='dob-year']",
    addressLine1: "input[name='address.addressLine1']",
    postCode: "input[name='address.postCode']",
    annualIncome: "input[name='annualIncome']",
    submit: "button[type='submit']",
};

function performSearch(customerDetails) {
    cy.get(`[data-testid="title-${customerDetails.title}"]`).click();
    cy.get(fields.firstName).type(customerDetails.firstName);
    cy.get(fields.lastName).type(customerDetails.lastName);
    cy.get(fields.dobDay).type(customerDetails.dobDay);
    cy.get(fields.dobMonth).type(customerDetails.dobMonth);
    cy.get(fields.dobYear).type(customerDetails.dobYear);
    cy.get(`[data-testid="employment-${customerDetails.employment}"]`).click();
    cy.get(fields.addressLine1).type(customerDetails.addressLine1);
    cy.get(fields.postCode).type(customerDetails.postCode);
    cy.get(fields.annualIncome).type(customerDetails.annualIncome);
    cy.get(fields.submit).click();
}

exports["performSearch"] = performSearch;
