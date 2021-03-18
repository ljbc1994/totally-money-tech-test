import { FormikProps, Form, ErrorMessage } from "formik";
import React from "react";
import { EmploymentKind, ICustomerDetails, TitleKind } from "../../../../shared/interfaces/ICustomerDetails";
import { Spacer } from "../common/Spacer";
import { Label, InlineStatusMessage, FormGroup, InputField, RadioButtonGroup, DateOfBirthInput } from "../form";
import { Badge } from "../common/Badge";
import { Button } from "../common/Button";
import useAutoTouch from "../../hooks/useAutoTouch";

export interface IFormProps {
    complete?: boolean;
    onFormSubmit: (data: ICustomerDetails) => Promise<boolean>;
    onFormComplete: () => void;
}

type ICustomerDetailsFormProps = IFormProps & FormikProps<ICustomerDetails>;

const CustomerDetailsForm: React.FC<ICustomerDetailsFormProps> = (props) => {
    const { isSubmitting, errors, touched, complete, onFormComplete } = props;

    useAutoTouch();

    React.useEffect(() => {
        if (complete) {
            onFormComplete();
        }
    }, [complete]);

    return (
        <Form name="customer-details">
            <Spacer>
                <FormGroup>
                    <Spacer mb="s2">
                        <Label htmlFor="title">Title</Label>
                    </Spacer>
                    <RadioButtonGroup
                        name="title"
                        options={[
                            { title: "Mr", value: TitleKind.Mr },
                            { title: "Mrs", value: TitleKind.Mrs },
                            { title: "Miss", value: TitleKind.Miss },
                            { title: "Ms", value: TitleKind.Ms },
                            { title: "Dr", value: TitleKind.Dr },
                        ]}
                        hideRadio={true}
                        inlineSize={"60px"}
                    />
                    <ErrorMessage name="title">
                        {(message) => (
                            <Spacer mt="s2">
                                <InlineStatusMessage status="error">{message}</InlineStatusMessage>
                            </Spacer>
                        )}
                    </ErrorMessage>
                </FormGroup>
            </Spacer>
            <Spacer mt="s4">
                <FormGroup>
                    <Spacer mb="s2">
                        <Label htmlFor="firstName">First name</Label>
                    </Spacer>
                    <InputField
                        id="firstName"
                        name="firstName"
                        placeholder="First name"
                        status={touched.firstName && errors.firstName && "error"}
                    />
                    <ErrorMessage name="firstName">
                        {(message) => (
                            <Spacer mt="s2">
                                <InlineStatusMessage status="error">{message}</InlineStatusMessage>
                            </Spacer>
                        )}
                    </ErrorMessage>
                </FormGroup>
            </Spacer>
            <Spacer mt="s4">
                <FormGroup>
                    <Spacer mb="s2">
                        <Label htmlFor="lastName">Last name</Label>
                    </Spacer>
                    <InputField
                        id="lastName"
                        name="lastName"
                        placeholder="Last name"
                        status={touched.lastName && errors.lastName && "error"}
                    />
                    <ErrorMessage name="lastName">
                        {(message) => (
                            <Spacer mt="s2">
                                <InlineStatusMessage status="error">{message}</InlineStatusMessage>
                            </Spacer>
                        )}
                    </ErrorMessage>
                </FormGroup>
            </Spacer>
            <Spacer mt="s4">
                <FormGroup>
                    <Spacer mb="s2">
                        <Label htmlFor="dateOfBirth">Date of birth</Label>
                    </Spacer>
                    <DateOfBirthInput
                        name="dateOfBirth"
                        status={touched.dateOfBirth && errors.dateOfBirth && "error"}
                    />
                </FormGroup>
            </Spacer>
            <Spacer mt="s4">
                <FormGroup>
                    <Spacer mb="s2">
                        <Label htmlFor="addressLine1">Address line 1</Label>
                    </Spacer>
                    <InputField
                        id="addressLine1"
                        name="address.addressLine1"
                        placeholder="House number"
                        status={touched?.address?.addressLine1 && errors?.address?.addressLine1 && "error"}
                    />
                    <ErrorMessage name="address.addressLine1">
                        {(message) => (
                            <Spacer mt="s2">
                                <InlineStatusMessage status="error">{message}</InlineStatusMessage>
                            </Spacer>
                        )}
                    </ErrorMessage>
                </FormGroup>
            </Spacer>
            <Spacer mt="s4">
                <FormGroup>
                    <Spacer mb="s2">
                        <Label htmlFor="postCode">Postcode</Label>
                    </Spacer>
                    <InputField
                        id="postCode"
                        name="address.postCode"
                        placeholder="Postcode"
                        status={touched?.address?.postCode && errors?.address?.postCode && "error"}
                    />
                    <ErrorMessage name="address.postCode">
                        {(message) => (
                            <Spacer mt="s2">
                                <InlineStatusMessage status="error">{message}</InlineStatusMessage>
                            </Spacer>
                        )}
                    </ErrorMessage>
                </FormGroup>
            </Spacer>
            <Spacer mt="s4">
                <FormGroup>
                    <Spacer mb="s2">
                        <Label htmlFor="employment">Employment</Label>
                    </Spacer>
                    <RadioButtonGroup
                        name="employment"
                        options={[
                            { title: "Full Time", value: EmploymentKind.FullTime },
                            { title: "Part Time", value: EmploymentKind.PartTime },
                            { title: "Student", value: EmploymentKind.Student },
                        ]}
                    />
                    <ErrorMessage name="employment">
                        {(message) => (
                            <Spacer mt="s2">
                                <InlineStatusMessage status="error">{message}</InlineStatusMessage>
                            </Spacer>
                        )}
                    </ErrorMessage>
                </FormGroup>
            </Spacer>
            <Spacer mt="s4">
                <FormGroup>
                    <Spacer mb="s2">
                        <Label htmlFor="annualIncome">Annual income</Label>
                    </Spacer>
                    <InputField
                        id="annualIncome"
                        name="annualIncome"
                        placeholder="Annual income"
                        status={touched.annualIncome && errors.annualIncome && "error"}
                        prepend={() => (
                            <Spacer mr="s2" style={{ display: "flex", alignItems: "center" }}>
                                <Badge>£</Badge>
                            </Spacer>
                        )}
                    />
                    <ErrorMessage name="annualIncome">
                        {(message) => (
                            <Spacer mt="s2">
                                <InlineStatusMessage status="error">{message}</InlineStatusMessage>
                            </Spacer>
                        )}
                    </ErrorMessage>
                </FormGroup>
            </Spacer>
            <Spacer mt="s6" style={{ textAlign: "center" }}>
                <Button disabled={isSubmitting} type="submit">
                    {isSubmitting ? "Searching..." : "Search"}
                </Button>
            </Spacer>
        </Form>
    );
};

export default CustomerDetailsForm;
