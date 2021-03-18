import React from "react";
import { CardType } from "../../../shared/constants/card";
import * as cards from "./cards";

interface ICreditCardProps {
    cardType: CardType;
    nameOnCard: string;
}

export const CreditCard: React.FC<ICreditCardProps> = ({ cardType, nameOnCard }) => {
    /**
     * This would just be images but I thought I'd
     * make it a lil fancy.
     */
    const CardKind = React.useMemo(() => {
        switch (cardType) {
            case CardType.Anywhere:
                return cards.AnywhereCard;
            case CardType.Liquid:
                return cards.LiquidCard;
            case CardType.Student:
                return cards.StudentLifeCard;
            default:
                return cards.BaseCard;
        }
    }, [cardType]);

    return <CardKind nameOnCard={nameOnCard} />;
};
