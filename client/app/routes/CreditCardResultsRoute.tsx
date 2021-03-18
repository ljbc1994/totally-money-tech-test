import React from "react";
import { Redirect } from "react-router-dom";
import { useCardState } from "../state/card.state";
import { CreditCardResults } from "../components/CreditCardResults";
import { CreditCardDetails } from "../components/CreditCardDetails";
import useSetState from "../hooks/useSetState";
import { ICreditCard } from "../../../shared/interfaces";
import { CreditCardSummary } from "../components/CreditCardSummary";
import { Spacer } from "../components/common/Spacer";
import { Container } from "../components/structure/Container";
import { Page } from "../components/structure/Page";
import { Header, HeaderText, HeaderTitle } from "../components/structure/Header";
import { ButtonLink } from "../components/common/Button";
import { BackToTop } from "../components/BackToTop";

interface ICreditCardResultsState {
    selectedCards: ICreditCard[];
}

const CreditCardResultsRoute: React.FC = () => {
    const { cards, customerDetails } = useCardState();
    const [state, setState] = useSetState<ICreditCardResultsState>();

    function isSelected(card: ICreditCard) {
        return state.selectedCards?.some((c) => c.id == card.id) ?? false;
    }

    function onToggleSelect(card: ICreditCard) {
        const selectedCards = state.selectedCards ?? [];

        const existing = selectedCards.findIndex((sc) => sc.id == card.id);

        if (existing > -1) {
            setState({
                selectedCards: selectedCards.filter((sc, i) => {
                    return i != existing;
                }),
            });
            return;
        }

        setState({
            selectedCards: selectedCards.concat([card]),
        });
    }

    const { title, text } = React.useMemo(() => {
        const length = cards?.length;

        if (length > 1) {
            return {
                title: "We've found some cards",
                text: "You can select the cards you like and we'll tell you the available credit",
            };
        }

        if (length == 1) {
            return {
                title: "We've found a card",
                text: "You can select the card and we'll tell you the available credit",
            };
        }

        return { title: "We couldn't find any cards", text: "Sorry, there are no cards available" };
    }, [cards]);

    if (!Array.isArray(cards)) {
        return <Redirect to={"/"} />;
    }

    return (
        <Page
            renderHeader={() => (
                <Header variant="primary">
                    <HeaderTitle>{title}</HeaderTitle>
                    <Spacer mt="s4">
                        <HeaderText>{text}</HeaderText>
                    </Spacer>
                </Header>
            )}
        >
            <BackToTop />

            <Container>
                <Spacer px="s4" py="s8">
                    <CreditCardResults>
                        {cards.map((card) => (
                            <CreditCardDetails
                                key={card.id}
                                details={card}
                                nameOnCard={`${customerDetails.title} ${customerDetails.firstName} ${customerDetails.lastName}`}
                                selected={isSelected(card)}
                                onSelect={onToggleSelect}
                            />
                        ))}
                    </CreditCardResults>
                    {state.selectedCards?.length > 0 && (
                        <Spacer mt="s8">
                            <CreditCardSummary cards={state.selectedCards} />
                        </Spacer>
                    )}
                </Spacer>

                <Spacer mt="s4" mb="s8" style={{ textAlign: "center", boxSizing: "border-box" }}>
                    <ButtonLink to="/" variant="secondary">
                        Back to search
                    </ButtonLink>
                </Spacer>
            </Container>
        </Page>
    );
};

export default CreditCardResultsRoute;
