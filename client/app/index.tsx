import React from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import CreditCardResultsRoute from "./routes/CreditCardResultsRoute";
import CustomerDetailsRoute from "./routes/CustomerDetailsRoute";
import ErrorRoute from "./routes/ErrorRoute";
import theme from "./styles/theme";
import { CardProvider } from "./state/card.state";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CardProvider>
                <GlobalStyle />
                <div id="app">
                    <Switch>
                        <Route path="/results" component={CreditCardResultsRoute} />
                        <Route path="/error" component={ErrorRoute} />
                        <Route path="/" component={CustomerDetailsRoute} />
                    </Switch>
                </div>
            </CardProvider>
        </ThemeProvider>
    );
};

export default App;
