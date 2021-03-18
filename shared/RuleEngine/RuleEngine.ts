import { ICustomerDetails } from "../interfaces/ICustomerDetails";
import { Rule } from "./rules/Rule";

export interface IRuleEngineOptions {
    rules: Rule[];
}

export interface IRuleEngineProcess {
    details: ICustomerDetails;
}

export class RuleEngine {
    private rules: Rule[];

    constructor(options: IRuleEngineOptions) {
        if (options.rules == null) {
            throw new Error("Rules must be provided");
        }

        if (new Set(options.rules.map((r) => r.id)).size != options.rules.length) {
            throw new Error("Duplicate rules have been provided");
        }

        this.rules = options.rules;
    }

    public process(data: IRuleEngineProcess): string[] {
        if (data == null) {
            throw new Error("No data available to process");
        }

        return this.rules
            .map((rule) => {
                if (rule.process({ details: data.details })) {
                    return rule.id;
                }
                return null;
            })
            .filter((rule) => rule != null);
    }
}
