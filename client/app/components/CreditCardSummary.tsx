import React from "react";
import styled, { css } from "styled-components";
import { ICreditCard } from "../../../shared/interfaces";

const SummaryContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 0;
    font-weight: bold;
    box-shadow: -10px -10px 10px rgba(0, 0, 0, 0.075);

    ${({ theme }) => css`
        padding: ${theme.spacing.s4} ${theme.spacing.s6};
        background: ${theme.colors.themeBlue};
        color: white;
        font-size: ${theme.text.lg};
        border-left: solid 0.5rem ${theme.colors.themeTeal};

        @media (min-width: ${theme.breakpoint.md}) {
            border-radius: 0.5rem;
            position: relative;
            width: auto;
        }
    `}
`;

interface ICreditCardSummaryProps {
    cards: ICreditCard[];
}

export const CreditCardSummary: React.FC<ICreditCardSummaryProps> = ({ cards }) => {
    const totalCredit = React.useMemo(() => {
        if (Array.isArray(cards)) {
            return cards.reduce((total, card) => total + card.creditAvailable, 0);
        }
        return 0;
    }, [cards]);

    return (
        <SummaryContainer>
            Total credit: £<span data-testid="total-credit">{totalCredit}</span>
        </SummaryContainer>
    );
};
