import { CardType } from "../constants/card";

export interface ICreditCard {
    id: CardType;
    name: string;
    apr: number;
    balanceTransferOfferDuration: number;
    purchaseOfferDuration: number;
    creditAvailable: number;
}
