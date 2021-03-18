import React from "react";
import styled, { css } from "styled-components";
import { Field, FieldAttributes } from "formik";

interface IInputProps extends FieldAttributes<any> {
    className?: string;
    status?: "error" | "warning" | "success";
    prepend?: () => React.ReactNode | string;
    append?: () => React.ReactNode | string;
}

const Container = styled.div`
    display: flex;
`;

const FilteredPropsInputField: React.FC<IInputProps> = ({ className, status, prepend, append, ...props }) => {
    if (prepend != null || append != null) {
        return (
            <Container>
                {prepend && prepend()}
                <Field className={className} {...props} />
                {append && append()}
            </Container>
        );
    }

    return <Field className={className} {...props} />;
};

const styles = css<IInputProps>`
    background-color: white;
    border-radius: 0.25rem;
    transition: all 250ms ease-in-out;
    width: 100%;

    ${({ theme }) => css`
        padding: ${theme.spacing.s4};
        border: solid 1px ${theme.colors.gray700};

        &::placeholder {
            color: ${theme.colors.gray800};
        }

        &:hover {
            border-color: ${theme.colors.themeBlue};
        }

        &:focus,
        &:active {
            outline-color: ${theme.colors.themeBlue};
            background: ${theme.colors.themeBlue100};
            color: ${theme.colors.themeBlue};
        }
    `}

    ${({ status, theme }) =>
        status === "error" &&
        css`
            border-color: ${theme.colors.red600};
            background: ${theme.colors.red50};

            &::placeholder {
                color: ${theme.colors.red600};
            }
        `}
`;

export const InputField = styled(FilteredPropsInputField)`
    ${styles}
`;

export const Input = styled.input<IInputProps>`
    ${styles}
`;
