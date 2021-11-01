import Typography from "app/components/elements/typography";
import React, { FC } from "react";
import style from "./authTemplate.module.scss";
import lb from "../../assets/images/logo.png";
import lw from "../../assets/images/logo-white.png";

const AuthTemplate: FC<{ link?: any; background?: any }> = ({ children, background, link }) => {
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
                    <Typography lighter className={style.auth_template__form__link}>
                        {link}
                    </Typography>
                </div>
                <div className={style.auth_template__form__content}>
                    {background && <img src={background} className={style.auth_template__vader} alt="" />}
                    {component}
                </div>
            </div>
        </div>
    );
};

export default AuthTemplate;
