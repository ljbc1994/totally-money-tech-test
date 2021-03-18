import React, { useContext, useReducer, useMemo } from "react";
import { ICustomerDetails } from "../../../shared/interfaces";
import { ICreditCard } from "../../../shared/interfaces/ICreditCard";

const SET_CARDS = "SET_CARDS";
const SET_CUSTOMER_DETAILS = "SET_CUSTOMER_DETAILS";

interface ICardState {
    cards: ICreditCard[];
    customerDetails: ICustomerDetails;
}

interface ICardContext {
    cards: ICreditCard[];
    customerDetails: ICustomerDetails;
    setCards: (cards: ICreditCard[]) => void;
    setCustomerDetails: (customerDetails: ICustomerDetails) => void;
}

type Action =
    | { type: typeof SET_CARDS; payload: ICreditCard[] }
    | { type: typeof SET_CUSTOMER_DETAILS; payload: ICustomerDetails };

const cardReducer = (state: ICardState, action: Action): ICardState => {
    switch (action.type) {
        case SET_CARDS: {
            return {
                ...state,
                cards: action.payload,
            };
        }
        case SET_CUSTOMER_DETAILS: {
            return {
                ...state,
                customerDetails: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

const CardContext = React.createContext<ICardContext>({
    cards: null,
    customerDetails: null,
    setCards: null,
    setCustomerDetails: null,
});

const CardProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(cardReducer, { cards: null, customerDetails: null });

    const context = useMemo(() => {
        return {
            cards: state.cards,

            customerDetails: state.customerDetails,

            setCards: (cards: ICreditCard[]) => {
                dispatch({ type: SET_CARDS, payload: cards });
            },

            setCustomerDetails: (customerDetails: ICustomerDetails) => {
                dispatch({ type: SET_CUSTOMER_DETAILS, payload: customerDetails });
            },
        };
    }, [state, dispatch]);

    return <CardContext.Provider value={context}>{children}</CardContext.Provider>;
};

const useCardState = (): ICardContext => {
    const context = useContext(CardContext);
    return context;
};

export { CardContext, CardProvider, useCardState };
