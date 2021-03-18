import React from "react";
import styled, { css } from "styled-components";

export const Badge = styled.div`
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 1;
    
    ${({ theme }) => css`
        background: ${theme.colors.themeBlue};
        color: white;
        padding: ${theme.spacing.s2};
    `}
`;
