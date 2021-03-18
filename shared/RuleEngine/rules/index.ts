import { CardType } from "../../constants/card";
import { AnywhereCardRule } from "./AnywhereCardRule";
import { LiquidCardRule } from "./LiquidCardRule";
import { Rule } from "./Rule";
import { StudentLifeCardRule } from "./StudentLifeCardRule";

export const rules: Rule[] = [
    new AnywhereCardRule({ id: CardType.Anywhere }),
    new LiquidCardRule({ id: CardType.Liquid }),
    new StudentLifeCardRule({ id: CardType.Student }),
];
