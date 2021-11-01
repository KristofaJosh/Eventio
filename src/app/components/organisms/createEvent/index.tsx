import React, { useState } from "react";
import Typography from "app/components/elements/typography";
import { useFormik } from "formik";
import Button, { RoundButton } from "../../elements/button";
import { IconAdd, IconClose } from "../../../assets/icons";
import style from "./createEvent.module.scss";
import logo from "../../../assets/images/logo.png";
import Input from "../../elements/input";
import { formikInputListener } from "../../../helpers/formikListeners";
import api from "../../../../utils/apis";

const CreateEventForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [showError, setShowError] = useState<any>("");
    const createEventHandler = useFormik({
        initialValues: {
            capacity: "",
            description: "",
            date: "",
            time: "",
            title: "",
        },
        validate: (values) => {
            const errors: any = {};
            if (!values.description) errors.description = "description has to be filled up";
            if (!values.date) errors.date = "date has to be filled up";
            if (!values.time) errors.time = "time has to be filled up";
            if (!values.title) errors.title = "title has to be filled up";
            if (!values.capacity) {
                errors.capacity = "capacity has to be filled up";
            } else if (!/[1-9]/.test(values.capacity)) {
                errors.capacity = "valid numbers only.";
            }
            return errors;
        },
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(true);
            setShowError("");
            const date = (values.date as any).toISOString().split("T")[0];
            const time = (values.time as any).toISOString().split("T")[1];
            const newValues = { capacity: +values.capacity, description: values.description, title: values.title, startsAt: `${date}T${time}` };
            api.events
                .create(newValues)
                .then(() => {
                    setSubmitting(false);
                    setShowForm(false);
                    setTimeout(() => window.location.reload(), 800);
                })
                .catch((err) => {
                    setSubmitting(false);
                    if (err?.response?.data?.errors) {
                        const er = err?.response?.data?.errors;
                        setShowError(Object.values(er).map((el: any) => el.message));
                    } else {
                        setShowError(err.response?.message || err?.response?.data?.error || "Something went wrong!");
                    }
                });
        },
    });

    return (
        <div>
            <RoundButton className="floating-btn" onClick={() => setShowForm(!showForm)} aria-label="create event">
                <IconAdd />
            </RoundButton>
            {showForm && (
                <div className={style.createEvent}>
                    <div className={style.createEvent__content}>
                        <div className={style.createEvent__content_heading}>
                            <img src={logo} className="logo" alt="E." />
                            <div role="presentation" onClick={() => setShowForm(!showForm)} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                <IconClose style={{ marginRight: 10 }} />
                                <Typography style={{ lineHeight: "48px" }}>Close</Typography>
                            </div>
                        </div>
                        <div className={style.createEvent__content_body}>
                            <div className={style.createEvent__content_form}>
                                <div className={style.createEvent__content_form__heading}>
                                    <Typography.Heading weight={400} level={1}>
                                        Create new event
                                    </Typography.Heading>
                                    <Typography lighter level="f18" className={showError ? style.createEvent__hasError : ""}>
                                        {showError || "Enter your details below."}
                                    </Typography>
                                </div>
                                <form action="" onSubmit={createEventHandler.handleSubmit}>
                                    <Input label="title" {...formikInputListener("title", createEventHandler)} />
                                    <Input label="description" {...formikInputListener("description", createEventHandler)} />
                                    <Input.Date label="date" minDate={new Date()} {...formikInputListener("date", createEventHandler)} />
                                    <Input.Date type="time" label="time" {...formikInputListener("time", createEventHandler)} />
                                    <Input label="capacity" {...formikInputListener("capacity", createEventHandler)} />
                                    <div className={style.createEvent__content_form__btn}>
                                        <Button text="create new event" loading={createEventHandler.isSubmitting} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateEventForm;
