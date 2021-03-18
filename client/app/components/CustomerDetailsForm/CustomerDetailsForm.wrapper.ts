import { withFormik, FormikErrors } from "formik";
import { EmploymentKind, ICustomerDetails, TitleKind } from "../../../../shared/interfaces/ICustomerDetails";
import CustomerDetailsFormSchema from "./CustomerDetailsForm.schema";
import CustomerDetailsForm, { IFormProps } from "./CustomerDetailsForm.component";

class FormError<T> extends Error {
    errors: FormikErrors<T>;
}

export default withFormik<IFormProps, ICustomerDetails>({
    mapPropsToValues: () => {
        return {
            firstName: "",
            annualIncome: ("" as unknown) as number,
            lastName: "",
            title: TitleKind.Mr,
            employment: EmploymentKind.FullTime,
            dateOfBirth: null,
            address: {
                addressLine1: "",
                postCode: "",
            },
        };
    },
    handleSubmit: async (values, form) => {
        try {
            await form.props.onFormSubmit(values);
            form.setSubmitting(false);
        } catch (ex) {
            if (ex instanceof FormError) {
                form.setErrors(ex.errors);
            }
        }
    },
    displayName: "CustomerDetailsFormWrapper",
    validationSchema: CustomerDetailsFormSchema,
})(CustomerDetailsForm);
