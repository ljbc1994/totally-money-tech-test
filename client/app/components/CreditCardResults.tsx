import React from "react";
import styled, { css } from "styled-components";

const ResultsContainer = styled.div`
    display: grid;

    ${({ theme }) => css`
        grid-gap: ${theme.spacing.s8};
    `}
`;

export const CreditCardResults: React.FC = ({ children }) => {
    return <ResultsContainer>{children}</ResultsContainer>;
};
