import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";

declare var process: any;
declare var module: any;

const Root = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

const rootElement = document.getElementById("root");

if (process.env.NODE_SSR_ENABLED == "true") {
    ReactDOM.hydrate(Root, rootElement);
} else {
    ReactDOM.render(Root, rootElement);
}

if (module.hot) {
    module.hot.accept(function (err: Error) {
        console.log("An error occurred while accepting new version", err);
    });
}
