import { CardType } from "../../shared/constants/card";
import { ICreditCard } from "../../shared/interfaces/ICreditCard";

export const cards: ICreditCard[] = [
    {
        id: CardType.Student,
        name: "Student Life",
        balanceTransferOfferDuration: 0,
        purchaseOfferDuration: 6,
        creditAvailable: 1200,
        apr: 18.9,
    },
    {
        id: CardType.Anywhere,
        name: "Anywhere Card",
        balanceTransferOfferDuration: 0,
        purchaseOfferDuration: 0,
        creditAvailable: 300,
        apr: 33.9,
    },
    {
        id: CardType.Liquid,
        name: "Liquid Card",
        balanceTransferOfferDuration: 12,
        purchaseOfferDuration: 6,
        creditAvailable: 3000,
        apr: 33.9,
    },
];

export function getCardById(id: string) {
    return cards.find((card) => card.id == id);
}
