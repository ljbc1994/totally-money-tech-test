import React from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import { ICustomerDetails } from "../../../shared/interfaces/ICustomerDetails";
import useSetState from "../hooks/useSetState";
import { useCardState } from "../state/card.state";
import CustomerDetailsForm from "../components/CustomerDetailsForm";
import api from "../services";
import { Spacer } from "../components/common/Spacer";
import { Alert } from "../components/common/Alert";
import { Container } from "../components/structure/Container";
import { Page } from "../components/structure/Page";
import { Header, HeaderText, HeaderTitle } from "../components/structure/Header";
import { BackToTop } from "../components/BackToTop";

const DetailsFormContainer = styled.div`
    width: 100%;
    max-width: 400px;
    background: white;
    margin: 0 auto;

    ${({ theme }) => css`
        padding: ${theme.spacing.s8} 0;

        @media (min-width: ${theme.breakpoint.sm}) {
            padding: ${theme.spacing.s8};
        }
    `}
`;

interface ICustomerDetailsRouteState {
    loading?: boolean;
    complete?: boolean;
    error?: string;
}

const CustomerDetailsRoute: React.FC = () => {
    const [state, setState] = useSetState<ICustomerDetailsRouteState>();
    const { push } = useHistory();
    const { setCards, setCustomerDetails } = useCardState();

    async function onSubmitDetails(details: ICustomerDetails): Promise<boolean> {
        try {
            setCustomerDetails(details);

            setState({ loading: true, error: null });
            /**
             * NOTE:
             * I could have used react-query or useSwr but thought
             * it'd be better to demonstrate that I know how to use
             * hooks.
             */
            const { result } = await api.findCardsForDetails(details);

            setCards(result);
            setState({ complete: true });

            return true;
        } catch (ex) {
            setState({ loading: false, error: ex });
            return Promise.reject(ex);
        }
    }

    async function onSubmitComplete() {
        push(`/results`);
    }

    return (
        <Page
            renderHeader={() => (
                <Header variant="primary">
                    <HeaderTitle>Let's find you a card!</HeaderTitle>
                    <Spacer mt="s4">
                        <HeaderText>Please provide your details and we'll show you available cards</HeaderText>
                    </Spacer>
                </Header>
            )}
        >
            <BackToTop />
            <Container background="white">
                <Spacer mx="s4">
                    <DetailsFormContainer>
                        {state.error && (
                            <Spacer mb="s4">
                                <Alert variant="error">Sorry, something when wrong. Please try again.</Alert>
                            </Spacer>
                        )}
                        <CustomerDetailsForm
                            complete={state.complete}
                            onFormSubmit={onSubmitDetails}
                            onFormComplete={onSubmitComplete}
                        />
                    </DetailsFormContainer>
                </Spacer>
            </Container>
        </Page>
    );
};

export default CustomerDetailsRoute;
