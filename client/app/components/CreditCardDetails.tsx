import React from "react";
import styled, { css } from "styled-components";
import { ICreditCard } from "../../../shared/interfaces";
import { Button } from "./common/Button";
import { Spacer } from "./common/Spacer";
import { CreditCard } from "./CreditCard";

interface ICardDetailsContainerProps {
    selected: boolean;
}

const CardDetailsContainer = styled.div<ICardDetailsContainerProps>`
    display: flex;
    background: white;
    align-items: center;
    flex-direction: column;
    border-radius: 0.5rem;
    outline: none;
    transition: all 250ms ease-in-out;

    ${({ theme, selected }) => css`
        padding: ${theme.spacing.s4} ${theme.spacing.s6};
        border: solid 1px ${theme.colors.gray600};

        &:focus,
        &:hover {
            border-color: ${theme.colors.themeTeal};
        }

        ${selected &&
        css`
            border-color: ${theme.colors.themeTeal};
        `}

        @media (min-width: ${theme.breakpoint.md}) {
            flex-direction: row;
        }
    `}
`;

const CardContainer = styled.div<ICardDetailsContainerProps>`
    ${({ theme, selected }) => css`
        margin-top: -2rem;
        transition: transform 500ms ease-in-out;

        @media (min-width: ${theme.breakpoint.md}) {
            margin-top: 0;
            margin-left: -3rem;
            margin-right: ${theme.spacing.s8};
        }

        ${selected &&
        css`
            transform: rotate(-4deg);
        `}
    `}
`;

const CardDetails = styled.div`
    flex: 1;
    width: 100%;

    ${({ theme }) => css`
        margin-top: ${theme.spacing.s4};

        @media (min-width: ${theme.breakpoint.md}) {
            margin-top: 0;
        }
    `}
`;

const CardName = styled.span`
    font-weight: bold;
    text-align: center;

    ${({ theme }) => `
        font-size: ${theme.text["2xl"]};
        color: ${theme.colors.themeBlue};

        @media (min-width: ${theme.breakpoint.md}) {
            font-size: ${theme.text["4xl"]};
        }
    `}
`;

const CardDetailsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 1rem;
    list-style-type: none;
    margin: 0;
    padding: 0;

    ${({ theme }) => css`
        @media (min-width: ${theme.breakpoint.lg}) {
            display: flex;
            flex-direction: row;
        }
    `}
`;

const CardDetailsListItem = styled.li`
    display: flex;
    flex-direction: column;

    ${({ theme }) => css`
        @media (min-width: ${theme.breakpoint.md}) {
            padding-right: ${theme.spacing.s10};
            padding-bottom: 0;
        }
    `}
`;

const CardDetailsItemTitle = styled.span`
    flex: 1;

    ${({ theme }) => css`
        font-size: ${theme.text.base};
        color: ${theme.colors.gray800};
        margin-bottom: ${theme.spacing.s1};
    `}
`;

const CardDetailsItemValue = styled.span`
    ${({ theme }) => css`
        font-size: ${theme.text.xl};
        font-weight: bold;
        color: ${theme.colors.themeTeal};
    `}
`;

const CardActions = styled.div`
    width: 100%;
    text-align: center;

    ${({ theme }) => css`
        margin-top: ${theme.spacing.s6};

        @media (min-width: ${theme.breakpoint.md}) {
            margin-top: 0;
            margin-left: auto;
            width: auto;
        }
    `}
`;

interface ICreditCardDetailsProps {
    details: ICreditCard;
    nameOnCard: string;
    selected?: boolean;
    onSelect?: (details: ICreditCard) => void;
}

export const CreditCardDetails: React.FC<ICreditCardDetailsProps> = ({ details, nameOnCard, selected, onSelect }) => {
    return (
        <CardDetailsContainer selected={selected}>
            <CardContainer selected={selected}>
                <CreditCard cardType={details.id} nameOnCard={nameOnCard} />
            </CardContainer>
            <CardDetails>
                <Spacer mb="s4">
                    <CardName>{details.name}</CardName>
                </Spacer>
                <CardDetailsList>
                    <CardDetailsListItem>
                        <CardDetailsItemTitle>Apr</CardDetailsItemTitle>
                        <CardDetailsItemValue>{details.apr}%</CardDetailsItemValue>
                    </CardDetailsListItem>
                    <CardDetailsListItem>
                        <CardDetailsItemTitle>Balance Transfer offer duration</CardDetailsItemTitle>
                        <CardDetailsItemValue>
                            {details.balanceTransferOfferDuration > 0
                                ? `${details.balanceTransferOfferDuration} months`
                                : "N/A"}
                        </CardDetailsItemValue>
                    </CardDetailsListItem>
                    <CardDetailsListItem>
                        <CardDetailsItemTitle>Purchase offer duration</CardDetailsItemTitle>
                        <CardDetailsItemValue>
                            {details.purchaseOfferDuration > 0 ? `${details.purchaseOfferDuration} months` : "N/A"}
                        </CardDetailsItemValue>
                    </CardDetailsListItem>
                    <CardDetailsListItem>
                        <CardDetailsItemTitle>Credit available</CardDetailsItemTitle>
                        <CardDetailsItemValue>£{details.creditAvailable}</CardDetailsItemValue>
                    </CardDetailsListItem>
                </CardDetailsList>
            </CardDetails>
            <CardActions>
                <Button
                    variant={selected ? "secondary" : "primary"}
                    onClick={() => onSelect(details)}
                    data-testid="card-select"
                >
                    {selected ? "Deselect" : "Select"}
                </Button>
            </CardActions>
        </CardDetailsContainer>
    );
};
