import React from "react";
import styled from "styled-components";
import { BaseCard, CardNumber, CardName } from "./BaseCard";
import { ICard } from "./types";

const Card = styled(BaseCard)`
    background-color: #fbab7e;
    background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
`;

export const LiquidCard: React.FC<ICard> = ({ nameOnCard }) => {
    return (
        <Card nameOnCard={nameOnCard}>
            <CardNumber>0000 0000 0000 0000</CardNumber>
            <CardName>{nameOnCard}</CardName>
        </Card>
    );
};
