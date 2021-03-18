import * as Yup from "yup";
import { ICustomerDetails, ICustomerAddress, EmploymentKind } from "../../../../shared/interfaces/ICustomerDetails";

const VALID_POSTCODE_REGEX = /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/;

function isOneOf<T extends object>(type: T) {
    return Object.keys(type).map((key) => (type as any)[key]);
}

const CustomerDetailsSchema = Yup.object().shape<ICustomerDetails>({
    title: Yup.mixed().required("Please select your title."),

    firstName: Yup.string()
        .trim()
        .required("This field is required.")
        .min(1, "This field is required.")
        .max(50, "Must be at most 50 characters."),

    lastName: Yup.string()
        .trim()
        .required("This field is required.")
        .min(1, "This field is required.")
        .max(50, "Must be at most 50 characters."),

    annualIncome: Yup.number()
        .required("This field is required.")
        .min(0, "Must be an amount over £0")
        .max(10000000, "Are you Jeff Bezos?")
        .typeError("Must be an amount."),

    employment: Yup.mixed().oneOf(isOneOf(EmploymentKind)).required("Please select your employment."),

    dateOfBirth: Yup.date()
        .required("Something is wrong with this date.")
        .typeError("Something is wrong with this date."),

    address: Yup.object().shape<ICustomerAddress>({
        addressLine1: Yup.string().trim().required("This field is required"),

        postCode: Yup.string()
            .trim()
            .required("This field is required.")
            .matches(VALID_POSTCODE_REGEX, "Not a valid postcode."),
    }),
});

export default CustomerDetailsSchema;
