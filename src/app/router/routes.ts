import { ComponentType } from "react";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register/registerPage";
import Dashboard from "../pages/dashboard";

export type SiteRouteT = {
    access: "private" | "protected" | "public";
    component: ComponentType<any>;
    exact: boolean;
    path: string;
};

export const appRoutes: Array<SiteRouteT> = [
    { access: "protected", component: LoginPage, exact: true, path: "/login" },
    { access: "protected", component: RegisterPage, exact: false, path: "/register" },
    { access: "private", component: Dashboard, exact: true, path: "/" },
];
