import { Field } from "formik";
import React from "react";
import styled, { css } from "styled-components";

interface IContainerProps {
    selected?: boolean;
}

const ButtonContainer = styled.label<IContainerProps>`
    display: flex;
    align-items: center;
    border-radius: 0.25rem;
    transition: all 250ms ease-in-out;
    cursor: pointer;
    background: white;

    ${({ theme, selected }) => css`
        padding: ${theme.spacing.s4};
        border: solid 1px ${theme.colors.gray700};

        ${selected &&
        css`
            border-color: ${theme.colors.themeBlue};
            background: ${theme.colors.themeBlue100};
        `}

        &:hover {
            border-color: ${theme.colors.themeBlue};
            background: ${theme.colors.themeBlue100};
        }
    `}
`;

const RadioField = styled(Field)`
    position: absolute;
    padding: 0px;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
`;

const Radio = styled.span`
    width: 18px;
    height: 18px;
    background: white;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &,
    &:before {
        border-radius: 50%;
        transition: all 250ms ease-in-out;
    }

    &:before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    ${({ theme }) => css`
        border: solid 2px ${theme.colors.gray600};
        margin-right: ${theme.spacing.s3};

        ${RadioField}:checked + & {
            border-color: ${theme.colors.themeBlue};

            &:before {
                background: ${theme.colors.themeBlue};
            }
        }
    `}
`;

interface IRadioTitleProps {
    selected?: boolean;
}

const RadioTitle = styled.span<IRadioTitleProps>`
    ${({ theme, selected }) => css`
        ${selected &&
        css`
            font-weight: bold;
            color: ${theme.colors.themeBlue};
        `}
    `}
`;

interface IRadioButtonProps {
    name: string;
    title: string;
    value: string;
    checked: boolean;
    hideRadio?: boolean;
}

export const RadioButtonField: React.FC<IRadioButtonProps> = ({ name, title, value, checked, hideRadio }) => {
    return (
        <ButtonContainer selected={checked} data-testid={`${name}-${value}`}>
            <RadioField type="radio" name={name} value={value} checked={checked} />
            {!hideRadio && <Radio />}
            <RadioTitle selected={checked}>{title}</RadioTitle>
        </ButtonContainer>
    );
};
