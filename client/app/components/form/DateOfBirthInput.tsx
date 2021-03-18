import { useField } from "formik";
import React, { useRef } from "react";
import styled from "styled-components";
import { isBefore, addYears, differenceInYears } from "date-fns";
import { isValidDate } from "../../utilities/date";
import { Spacer } from "../common/Spacer";
import { InlineStatusMessage } from "./InlineStatusMessage";
import { Input } from "./Input";

const DateOfBirthContainer = styled.div`
    display: flex;
`;

const InputContainer = styled.div`
    flex: 1;
`;

interface IDateOfBirthInput {
    status?: "error" | "warning" | "success" | "";
    name: string;
}

const date = new Date();

export const DateOfBirthInput: React.FC<IDateOfBirthInput> = ({ name, status }) => {
    const [_, meta, helpers] = useField(name);

    const valueRef = useRef<{
        year: number;
        month: number;
        day: number;
    }>({
        year: null,
        month: null,
        day: null,
    });

    function onFieldChange(field: "day" | "month" | "year") {
        return (evt: React.ChangeEvent<HTMLInputElement>) => {
            const value = evt.target.value;

            valueRef.current = {
                ...valueRef.current,
                [field]: parseInt(value, 10),
            };

            const { year, month, day } = valueRef.current;

            helpers.setTouched(true, false);

            const hasDay = day?.toString().length >= 1;
            const hasMonth = month?.toString().length >= 1;
            const hasYear = year?.toString().length >= 4;
            const filledDate = hasYear && hasMonth && hasDay;

            if ((hasDay && day < 1) || day > 31) {
                helpers.setError("The date specified is not valid.");
                return;
            }

            if ((hasMonth && month < 1) || month > 12) {
                helpers.setError("The month specified is not valid.");
                return;
            }

            if (hasYear && (year < 1 || year > date.getFullYear())) {
                helpers.setError("The year specified is not valid.");
                return;
            }

            if (filledDate && !isValidDate(year, month - 1, day)) {
                helpers.setError("The date specified is not valid.");
                return;
            }

            const validatedDate = new Date(year, month - 1, day);

            if (filledDate && isBefore(validatedDate, addYears(date, -100))) {
                helpers.setError("Are you really over 100?");
                return;
            }

            if (filledDate && differenceInYears(date, validatedDate) < 18) {
                helpers.setError("Must be at least 18.");
                return;
            }

            helpers.setValue(validatedDate);
        };
    }

    return (
        <React.Fragment>
            <DateOfBirthContainer>
                <InputContainer>
                    <Input
                        type="number"
                        placeholder="DD"
                        status={status}
                        onChange={onFieldChange("day")}
                        pattern="\d*"
                        min={1}
                        max={31}
                        name="dob-day"
                    />
                </InputContainer>
                <InputContainer>
                    <Spacer ml="s3">
                        <Input
                            type="number"
                            placeholder="MM"
                            status={status}
                            onChange={onFieldChange("month")}
                            pattern="\d*"
                            min={1}
                            max={12}
                            name="dob-month"
                        />
                    </Spacer>
                </InputContainer>
                <InputContainer>
                    <Spacer ml="s3">
                        <Input
                            type="number"
                            placeholder="YYYY"
                            status={status}
                            onChange={onFieldChange("year")}
                            pattern="\d*"
                            name="dob-year"
                        />
                    </Spacer>
                </InputContainer>
            </DateOfBirthContainer>
            {meta.error && meta.touched && (
                <Spacer mt="s2">
                    <InlineStatusMessage status="error">{meta.error}</InlineStatusMessage>
                </Spacer>
            )}
        </React.Fragment>
    );
};
