import React from "react";
import styled from "styled-components";
import { BaseCard, CardNumber, CardName } from "./BaseCard";
import { ICard } from "./types";

const Card = styled(BaseCard)`
    background-color: #ff3cac;
    background-image: linear-gradient(225deg, #ff3cac 0%, #784ba0 50%, #2b86c5 100%);
`;

export const AnywhereCard: React.FC<ICard> = ({ nameOnCard }) => {
    return (
        <Card nameOnCard={nameOnCard}>
            <CardNumber>1234 0000 0000 0000</CardNumber>
            <CardName>{nameOnCard}</CardName>
        </Card>
    );
};
