import { cards } from "../store/cards";

interface ICardServiceOptions {
    url: string;
}

/**
 * NOTE:
 * Mock API returning available cards.
 */
export default class CardService {
    private url: string;

    constructor(options: ICardServiceOptions) {
        this.url = options.url;
    }

    public async getCards() {
        try {
            /**
             * NOTE:
             * const cards = await fetch(`${this.url}/cards`, {
             *   method: "GET",
             *   headers: {
             *     Accept: "application/json"
             *   },
             *   ...security tokens
             * });
             * return cards;
             */
            return cards;
        } catch (ex) {
            // NOTE:
            // ErrorService.log(ex, "Failed to retrieve cards");
            throw ex;
        }
    }
}
