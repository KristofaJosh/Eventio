import { FormikValues } from "formik";

export const formikErrorHandler = (name: string, formikInstance: FormikValues) => {
    return formikInstance.errors[name] && formikInstance.touched[name] && formikInstance.errors[name];
};

export const formikInputListener = (name: string, formikInstance: FormikValues) => ({
    name,
    id: name,
    value: formikInstance.values[name],
    onBlur: formikInstance.handleBlur,
    onChange: (...args: any) => {
        formikInstance.handleChange(...args);
    },
    error: formikErrorHandler(name, formikInstance),
});
