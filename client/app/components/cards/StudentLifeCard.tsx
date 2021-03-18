import React from "react";
import styled from "styled-components";
import { BaseCard, CardNumber, CardName } from "./BaseCard";
import { ICard } from "./types";

const Card = styled(BaseCard)`
    border-top-right-radius: 5rem;
    background-color: #0093e9;
    background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`;

export const StudentLifeCard: React.FC<ICard> = ({ nameOnCard }) => {
    return (
        <Card nameOnCard={nameOnCard}>
            <CardNumber>0000 0000 0000 0000</CardNumber>
            <CardName>{nameOnCard}</CardName>
        </Card>
    );
};
