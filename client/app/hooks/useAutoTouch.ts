import { useFormikContext } from "formik";
import React from "react";
import flatten from "flat";

const useAutoTouch = (): void => {
    const { errors, setFieldTouched, isSubmitting, isValidating } = useFormikContext();

    React.useEffect(() => {
        if (isSubmitting && !isValidating) {
            for (const path of Object.keys(flatten(errors))) {
                setFieldTouched(path, true, false);
            }
        }
    }, [errors, isSubmitting, isValidating, setFieldTouched]);
};

export default useAutoTouch;
