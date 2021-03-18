import * as React from "react";
import styled, { css } from "styled-components";

interface IContainerProps {
    background?: string;
}

export const Container = styled.div<IContainerProps>`
    width: 100%;
    margin-right: auto;
    margin-left: auto;

    ${({ theme, background }) => css`
        background: ${background};
        padding-right: ${theme.spacing.s4};
        padding-left: ${theme.spacing.s4};

        @media (min-width: ${theme.breakpoint.sm}) {
            max-width: ${theme.breakpoint.sm};
        }

        @media (min-width: ${theme.breakpoint.md}) {
            max-width: ${theme.breakpoint.md};
        }

        @media (min-width: ${theme.breakpoint.lg}) {
            max-width: ${theme.breakpoint.lg};
        }

        @media (min-width: ${theme.breakpoint.xl}) {
            max-width: ${theme.breakpoint.xl};
        }
    `}
`;
