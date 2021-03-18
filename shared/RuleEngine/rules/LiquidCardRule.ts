import { Rule, IRuleOptions, IRuleProcess } from "./Rule";

export const LIQUID_CARD_ANNUAL_INCOME = 16000;

export class LiquidCardRule extends Rule {
    constuctor(options: IRuleOptions) {
        this.id = options.id;
    }

    public process(data: IRuleProcess): boolean {
        super.process(data);
        return data.details?.annualIncome > LIQUID_CARD_ANNUAL_INCOME;
    }
}
