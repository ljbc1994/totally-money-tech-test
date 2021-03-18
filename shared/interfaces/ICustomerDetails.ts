export enum EmploymentKind {
    Student = "Student",
    FullTime = "Full time",
    PartTime = "Part time",
}

export enum TitleKind {
    Mr = "Mr",
    Mrs = "Mrs",
    Miss = "Miss",
    Ms = "Ms",
    Dr = "Dr",
}

export interface ICustomerAddress {
    addressLine1: string;
    postCode: string;
}

export interface ICustomerDetails {
    title: TitleKind;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    address: ICustomerAddress;
    employment: EmploymentKind;
    annualIncome: number;
}
