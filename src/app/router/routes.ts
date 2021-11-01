import { ComponentType, lazy } from "react";
import LoginPage from "../pages/auth/login";
import Dashboard from "../pages/dashboard";
// import DashboardEvents from "../pages/dashboard/events";

const RegisterPage = lazy(() => import("../pages/auth/register/registerPage"));
const ProfilePage = lazy(() => import("../pages/dashboard/profile"));
const DashboardEvents = lazy(() => import("../pages/dashboard/events"));

export type SiteRouteT = {
    access: "private" | "protected" | "public";
    component: ComponentType<any>;
    exact: boolean;
    path: string | string[];
};

export const appRoutes: Array<SiteRouteT> = [
    { access: "protected", component: RegisterPage, exact: true, path: "/register" },
    { access: "protected", component: LoginPage, exact: true, path: "/login" },
    { access: "private", component: Dashboard, exact: true, path: "/" },
];

export const dashboardRoutes: Array<SiteRouteT> = [
    { access: "private", component: DashboardEvents, exact: true, path: ["/", "/dashboard"] },
    { access: "private", component: ProfilePage, exact: true, path: "/dashboard/profile" },
];
