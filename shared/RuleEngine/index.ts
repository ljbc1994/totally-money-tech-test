import { rules } from "./rules";
import { RuleEngine } from "./RuleEngine";
import { ICustomerDetails } from "../interfaces/ICustomerDetails";

const engine = new RuleEngine({ rules });

export function processRules(details: ICustomerDetails): string[] {
    return engine.process({ details });
}
