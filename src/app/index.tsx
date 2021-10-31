import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import RenderRoute from "./router";
import { appRoutes } from "./router/routes";
import { useAppSelector } from "./store";

const AppRoot = () => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return (
        <Suspense fallback="...">
            <Switch>
                {appRoutes.map((el, i) => (
                    <RenderRoute key={i.toString()} authenticated={isAuthenticated} {...el} />
                ))}
            </Switch>
        </Suspense>
    );
};

export default AppRoot;
