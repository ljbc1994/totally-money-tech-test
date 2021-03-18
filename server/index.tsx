import React from "react";
import express from "express";
import { json as jsonParser } from "body-parser";
import ReactDOMServer from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter } from "react-router-dom";
import { withApi } from "./api";
import { getAppShell } from "./utilities/app-shell";
import App from "../client/app";

const app = express();
const port = 3000;

app.use(jsonParser());
app.use(express.static("./dist/assets"));

withApi(app);

declare var NODE_SSR_ENABLED: boolean;
const isSSREnabled = NODE_SSR_ENABLED == true;

app.get<never, string>("*", async (req, res) => {
    const sheet = new ServerStyleSheet();

    try {
        let shell = await getAppShell();

        if (isSSREnabled) {
            const app = ReactDOMServer.renderToString(
                sheet.collectStyles(
                    <StaticRouter location={req.url}>
                        <App />
                    </StaticRouter>,
                ),
            );

            const appStyles = sheet.getStyleTags();

            shell = shell
                .replace(`<style id="ssr-styles"></style>`, appStyles)
                .replace(`<div id="root"></div>`, `<div id='root'>${app}</div>`);
        }

        return res.send(shell);
    } catch (ex) {
        return res.status(500).send("An error has occurred");
    } finally {
        sheet.seal();
    }
});

app.listen(port, () => {
    console.log(`App started at port: ${port}`);
});
