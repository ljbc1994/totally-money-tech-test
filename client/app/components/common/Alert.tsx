import React from "react";
import styled, { css } from "styled-components";

interface IAlertProps {
    variant?: "error";
}

export const Alert = styled.div<IAlertProps>`
    border-radius: 0.25rem;
    font-weight: bold;

    ${({ theme, variant }) => css`
        padding: ${theme.spacing.s4} ${theme.spacing.s5};
        background: ${theme.colors.themeBlue100};
        color: ${theme.colors.themeBlue};

        ${variant === "error" && css`
            border-top: solid 0.2rem ${theme.colors.red500};
            background: ${theme.colors.red100};
            color: ${theme.colors.red500};
        `}
    `}
`;