import { useField } from "formik";
import React from "react";
import styled, { css } from "styled-components";
import { RadioButtonField } from "./RadioButton";

interface IGroupContainerProps {
    inlineSize?: string;
}

const GroupContainer = styled.div<IGroupContainerProps>`
    display: grid;

    ${({ theme, inlineSize }) => css`
        grid-gap: ${theme.spacing.s3};

        ${inlineSize &&
        css`
            grid-template-columns: repeat(auto-fit, minmax(${inlineSize}, 1fr));
        `}
    `}
`;

interface IGroupOption {
    title: string;
    value: string;
}

interface IRadioButtonGroupProps {
    name: string;
    options: IGroupOption[];
    inlineSize?: string;
    hideRadio?: boolean;
}

export const RadioButtonGroup: React.FC<IRadioButtonGroupProps> = ({ name, options, inlineSize, hideRadio }) => {
    const [field] = useField(name);

    return (
        <GroupContainer inlineSize={inlineSize}>
            {options.map((option) => (
                <RadioButtonField
                    key={option.value}
                    name={name}
                    title={option.title}
                    value={option.value}
                    checked={field.value == option.value}
                    hideRadio={hideRadio}
                />
            ))}
        </GroupContainer>
    );
};
