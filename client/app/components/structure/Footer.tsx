import React from "react";
import styled, { css } from "styled-components";
import { Container } from "./Container";

const FooterContainer = styled.nav`
    ${({ theme }) => css`
        background: ${theme.colors.themeTeal};
        padding: ${theme.spacing.s6} ${theme.spacing.s4};
    `}
`;

export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <Container>Made by me</Container>
        </FooterContainer>
    );
};
