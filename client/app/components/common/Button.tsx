import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface IButtonProps {
    variant?: "primary" | "secondary";
}

const styles = css<IButtonProps>`
    display: inline-flex;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    font-weight: bold;
    transition: all 250ms ease-in-out;
    outline: none;
    width: 100%;
    justify-content: center;
    align-items: center;
    
    ${({ theme, variant }) => css`
        background: ${theme.colors.themeBlue};
        border: solid 1px value ${theme.colors.themeBlue};
        padding: ${theme.spacing.s5} ${theme.spacing.s10};
        font-size: ${theme.text.lg};

        &:hover {
            background: ${theme.colors.themeBlue900};
        }

        &:focus {
            border-color: ${theme.colors.themeTeal};
            box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
        }

        @media (min-width: ${theme.breakpoint.sm}) {
            width: auto;
        }

        ${variant === "secondary" && (
            css`
                background: ${theme.colors.themeTeal};
                border-color: ${theme.colors.themeTeal};
                color: ${theme.colors.themeBlue900};

                &:hover {
                    background: ${theme.colors.themeTeal600}
                }

                &:focus {
                    border-color: ${theme.colors.themeBlue900};
                }
            `
        )}
    `}
`;

export const ButtonLink = styled(Link)`
    ${styles};
    text-decoration: none;
`; 

export const Button = styled.button<IButtonProps>`
    ${styles};
`;