import React from "react";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";

const spacerProps = {
    mt: "margin-top",
    mb: "margin-bottom",
    ml: "margin-left",
    mr: "margin-right",
    mx: ["margin-left", "margin-right"],
    my: ["margin-top", "margin-bottom"],
    pt: "padding-top",
    pb: "padding-bottom",
    pl: "padding-left",
    pr: "padding-right",
    px: ["padding-left", "padding-right"],
    py: ["padding-top", "padding-bottom"],
};

type Option = keyof typeof theme["spacing"];

type ISpacerOptions = {
    [key in keyof typeof spacerProps]?: Option;  
}

export const Spacer = styled.div<ISpacerOptions>`
    ${(props) => {
        const matched = Object.keys(props)
            .filter((prop) => spacerProps[prop] != null)
            .map((prop) => [spacerProps[prop], props[prop]]) as [string | string[], string][];

        return matched.map(([css, value]) => {
            if (Array.isArray(css)) {
                return css.map((cssKey) => `${cssKey}: ${theme.spacing[value]};`).join("");
            }
            return `${css}: ${theme.spacing[value]};`;
        })
    }}
`;