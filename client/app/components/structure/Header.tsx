import React from "react";
import styled, { css } from "styled-components";
import { Container } from "./Container";

export const HeaderTitle = styled.h1<IHeaderProps>`
    color: white;
    margin: 0;

    ${({ theme }) => css`
        font-size: ${theme.text["2xl"]};

        @media (min-width: ${theme.breakpoint.md}) {
            font-size: ${theme.text["5xl"]};
        }
    `}
`;

export const HeaderText = styled.span<IHeaderProps>`
    ${({ theme }) => css`
        color: ${theme.colors.themeBlue100};
        font-size: ${theme.text.base};

        @media (min-width: ${theme.breakpoint.md}) {
            font-size: ${theme.text["2xl"]};
        }
    `}
`;

const HeaderContainer = styled.header<IHeaderProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;

    ${({ theme, variant }) => css`
        padding: ${theme.spacing.s8} 0;

        ${variant == "primary" &&
        css`
            background: ${theme.colors.themeBlue900};
        `}

        @media (min-width: ${theme.breakpoint.md}) {
            padding: ${theme.spacing.s14} 0;
        }
    `}
`;

interface IHeaderProps {
    variant?: "primary" | "secondary";
}

export const Header: React.FC<IHeaderProps> = ({ children, variant }) => {
    return (
        <HeaderContainer variant={variant}>
            <Container>{children}</Container>
        </HeaderContainer>
    );
};
