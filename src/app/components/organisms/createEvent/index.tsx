import React, { useState } from "react";
import Typography from "app/components/elements/typography";
import { useFormik } from "formik";
import Button, { RoundButton } from "../../elements/button";
import { IconAdd, IconClose } from "../../../assets/icons";
import style from "./createEvent.module.scss";
import logo from "../../../assets/images/logo.png";
import Input from "../../elements/input";
import { formikInputListener } from "../../../helpers/formikListeners";

const CreateEventForm = () => {
    const [showForm, setShowForm] = useState(false);
    const createEventHandler = useFormik({
        initialValues: {},
        validate: () => {},
        onSubmit: () => {},
    });
    return (
        <div>
            <RoundButton className="floating-btn" onClick={() => setShowForm(!showForm)}>
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
                                    <Typography lighter level="f18">
                                        Enter your details below.
                                    </Typography>
                                </div>
                                <div className={style.createEvent__content_form__counter}>
                                    <Typography>Event no. {3}</Typography>
                                </div>
                                <form action="" onSubmit={createEventHandler.handleSubmit}>
                                    <Input label="description" {...formikInputListener("", createEventHandler)} />
                                    <Input type="date" label="date" {...formikInputListener("", createEventHandler)} />
                                    <Input type="time" label="time" {...formikInputListener("", createEventHandler)} />
                                    <Input label="capacity" {...formikInputListener("", createEventHandler)} />
                                    <div className={style.createEvent__content_form__btn}>
                                        <Button text="create new event" />
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
