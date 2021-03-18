import React from "react";
import styled, { css } from "styled-components";
import { ICard } from "./types";

export const BaseCard = styled.div<ICard>`
    width: 250px;
    height: 150px;
    border-radius: 0.5rem;
    position: relative;

    ${({ theme }) => css`
        background: ${theme.colors.themeBlue};
        padding: ${theme.spacing.s6} ${theme.spacing.s8};
    `}
`;

export const CardNumber = styled.span`
    color: white;
    position: absolute;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);

    ${({ theme }) => css`
        font-size: ${theme.text.lg};
        bottom: ${theme.spacing.s10};
        left: ${theme.spacing.s6};
    `}
`;

export const CardName = styled.span`
    color: white;
    position: absolute;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);

    ${({ theme }) => css`
        font-size: ${theme.text.sm};
        bottom: ${theme.spacing.s4};
        left: ${theme.spacing.s6};
    `}
`;
