import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardTemplate from "../../templates/dashboard/dashboard.template";
import RenderRoute from "../../router";
import { dashboardRoutes } from "../../router/routes";
import Notfound from "../notfound";
import { useAppSelector } from "../../store";

const Dashboard = () => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return (
        <DashboardTemplate>
            <Switch>
                {dashboardRoutes.map((el, i) => (
                    <RenderRoute key={i.toString()} authenticated={isAuthenticated} {...el} />
                ))}
                <Route path="*" component={Notfound} />
            </Switch>
        </DashboardTemplate>
    );
};

export default Dashboard;
