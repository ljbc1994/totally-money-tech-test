import React from "react";
import styled, { css } from "styled-components";

interface IInlineStatusMessageProps {
    status?: "error" | "warning" | "success";
    icon?: React.ReactNode;
}

const MessageContainer = styled.div<IInlineStatusMessageProps>`
    display: flex;
    align-items: center;

    ${({ status, theme }) =>
        status === "error" &&
        css`
            color: ${theme.colors.red500};
        `}
`;

const IconContainer = styled.div`
    margin-right: ${({ theme }) => theme.spacing.s1};
`;

const InlineContainer = styled.div<IInlineStatusMessageProps>``;

export const InlineStatusMessage: React.FC<IInlineStatusMessageProps> = ({ status, icon, children }) => {
    const statusIcon = React.useMemo(() => {
        if (icon != null) {
            return icon;
        }
        switch (status) {
            case "error": {
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                );
            }
            case "success": {
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                );
            }
            case "warning": {
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                );
            }
            default: {
                return null;
            }
        }
    }, [status, icon]);

    return (
        <MessageContainer status={status}>
            {status && <IconContainer>{statusIcon}</IconContainer>}
            <InlineContainer status={status}>{children}</InlineContainer>
        </MessageContainer>
    );
};
