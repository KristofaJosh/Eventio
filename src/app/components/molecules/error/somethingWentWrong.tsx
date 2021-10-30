import React from "react";
import style from "./error.module.scss";
import Typography from "../../elements/typography";
import Button from "../../elements/button";

const SomethingWentWrong = () => {
    const handleRefreshPage = () => {};
    return (
        <div className={style.error}>
            <Typography.Heading className={style.error__heading} level={1} weight={400} text="Something went wrong" />
            <Typography className={style.error__subtext} level="f18" lighter>
                Seems like Darth Vader just hits our website and drops it down. Please press the refresh button and everything should be fine again.{" "}
            </Typography>
            <Button className={style.error__button} btnType="black" text="refresh" onClick={handleRefreshPage} />
        </div>
    );
};

export default SomethingWentWrong;
