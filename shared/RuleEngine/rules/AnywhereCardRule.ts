import { Rule, IRuleOptions, IRuleProcess } from "./Rule";

export class AnywhereCardRule extends Rule {
    constuctor(options: IRuleOptions) {
        this.id = options.id;
    }

    public process(data: IRuleProcess): boolean {
        super.process(data);
        return true;
    }
}
