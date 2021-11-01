/* eslint-disable react/jsx-indent-props */
import React, { FC } from "react";
import { Route, RouteComponentProps, Redirect } from "react-router-dom";
import { SiteRouteT } from "./routes";

const RenderRoute: FC<SiteRouteT & { authenticated: boolean }> = ({ access, component: Component, authenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props: RouteComponentProps<any>) => {
                if (access === "private") {
                    return authenticated ? <Component {...props} {...rest} /> : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />;
                }
                if (access === "protected") {
                    return !authenticated ? <Component {...props} {...rest} /> : <Redirect to={{ pathname: "/", state: { from: props.location } }} />;
                }
                return <Component {...props} {...rest} />;
            }}
        />
    );
};

export default RenderRoute;
