import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import RenderRoute from "./router";
import { appRoutes } from "./router/routes";
import { useAppSelector } from "./store";
import Notfound from "./pages/dashboard/notfound";

const AppRoot = () => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return (
        <Suspense fallback="...">
            <Switch>
                {appRoutes.map((el, i) => (
                    <RenderRoute key={i.toString()} authenticated={isAuthenticated} {...el} />
                ))}
                <Route path="*" component={Notfound} />
            </Switch>
        </Suspense>
    );
};

export default AppRoot;
