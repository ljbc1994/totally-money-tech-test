import { ICustomerDetails } from "../../shared/interfaces/ICustomerDetails";

export const emptyDetails: ICustomerDetails = {
    title: null,
    address: { addressLine1: null, postCode: null },
    dateOfBirth: null,
    employment: null,
    firstName: null,
    lastName: null,
    annualIncome: 0,
};
