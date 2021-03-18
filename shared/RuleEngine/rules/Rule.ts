import { ICustomerDetails } from "../../interfaces/ICustomerDetails";

export interface IRuleOptions {
    id: string;
}

export interface IRuleProcess {
    details: ICustomerDetails;
}

export abstract class Rule {
    public id: string;

    constructor(options: IRuleOptions) {
        this.id = options.id;
    }

    public process(data: IRuleProcess): boolean {
        if (data.details == null) {
            throw new Error("No customer details to process");
        }
        return null;
    }
}
