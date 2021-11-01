import Typography from "app/components/elements/typography";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import style from "./authTemplate.module.scss";
import vader from "../../assets/images/vader.png";
import lb from "../../assets/images/logo.png";
import lw from "../../assets/images/logo-white.png";

const renderLink = (_formName: any) => {
    const formName = _formName[0];
    if (formName.type.name === "RegisterForm") {
        return (
            <Typography lighter className={style.auth_template__form__link}>
                Already have an account? <Link to="/login">SIGN IN</Link>
            </Typography>
        );
    }
    if (formName.type.name === "SignInForm") {
        return (
            <Typography lighter className={style.auth_template__form__link}>
                Don&apos;t have account? <Link to="/register">SIGN UP</Link>
            </Typography>
        );
    }
    return null;
};

const renderVader = (_formName: any) => {
    const formName = _formName[0];
    if (["PageNotFound", "SomethingWentWrong"].includes(formName.type.name)) {
        return <img src={vader} className={style.auth_template__vader} alt="" />;
    }
    return null;
};

const AuthTemplate: FC = ({ children }) => {
    const component = React.Children.map(children, (child: any) => {
        if (typeof child.type !== "function") {
            return <div>Please use a functional component</div>;
        }
        return child;
    });

    return (
        <div className={style.auth_template}>
            <div className={style.auth_template__side}>
                <img className="logo" src={lw} alt="E." />
                <div className={style.auth_template__side__nugget}>
                    <Typography>“Great, kid. Don’t get cocky.”</Typography>
                    <div style={{ background: "var(--green)", height: 2, width: 12, marginTop: 20, marginBottom: 15 }} />
                    <Typography level="f18" lighter>
                        Han Solo
                    </Typography>
                </div>
            </div>
            <div className={style.auth_template__form}>
                <div className={style.auth_template__form__top}>
                    <img className="logo" src={lb} alt="E." />
                    {renderLink(component)}
                </div>
                <div className={style.auth_template__form__content}>
                    {renderVader(component)}
                    {component}
                </div>
            </div>
        </div>
    );
};

export default AuthTemplate;
