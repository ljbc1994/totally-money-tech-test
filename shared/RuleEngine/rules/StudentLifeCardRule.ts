import { EmploymentKind } from "../../interfaces/ICustomerDetails";
import { Rule, IRuleOptions, IRuleProcess } from "./Rule";

export class StudentLifeCardRule extends Rule {
    constuctor(options: IRuleOptions) {
        this.id = options.id;
    }

    public process(data: IRuleProcess): boolean {
        super.process(data);
        return data.details?.employment == EmploymentKind.Student;
    }
}
