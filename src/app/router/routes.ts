import { ComponentType, lazy } from "react";
import LoginPage from "../pages/auth/login";
import Dashboard from "../pages/dashboard";
import DashboardEvents from "../pages/dashboard/events";

const RegisterPage = lazy(() => import("../pages/auth/register/registerPage"));

export type SiteRouteT = {
    access: "private" | "protected" | "public";
    component: ComponentType<any>;
    exact: boolean;
    path: string | string[];
};

export const appRoutes: Array<SiteRouteT> = [
    { access: "protected", component: LoginPage, exact: true, path: "/login" },
    { access: "protected", component: RegisterPage, exact: true, path: "/register" },
    { access: "private", component: Dashboard, exact: true, path: "/" },
];

export const dashboardRoutes: Array<SiteRouteT> = [
    { access: "private", component: DashboardEvents, exact: true, path: "/" },
    { access: "private", component: RegisterPage, exact: true, path: "/profile" },
];
