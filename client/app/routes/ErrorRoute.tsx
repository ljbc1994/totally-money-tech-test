import { Page } from "../components/structure/Page";
import React from "react";
import { Header, HeaderTitle, HeaderText } from "../components/structure/Header";
import { Spacer } from "../components/common/Spacer";

const ErrorRoute: React.FC = () => {
    return (
        <Page
            renderHeader={() => (
                <Header variant="primary">
                    <HeaderTitle>Oops, something went wrong</HeaderTitle>
                    <Spacer mt="s4">
                        <HeaderText>Sorry, an error has occured and we've reported to our team.</HeaderText>
                    </Spacer>
                </Header>
            )}
        >
        </Page>
    );
};

export default ErrorRoute;
