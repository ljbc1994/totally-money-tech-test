import React from "react";
import styled, { css } from "styled-components";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.main`
    flex: 1 0 auto;
`;

interface IPageProps {
    renderHeader?: () => React.ReactNode;
}

export const Page: React.FC<IPageProps> = ({ renderHeader, children }) => {
    return (
        <PageContainer>
            <Nav />
            {renderHeader && renderHeader()}
            <Content>{children}</Content>
            <Footer />
        </PageContainer>
    );
};
