import React from "react";
import PageNotFound from "../components/molecules/error/pageNotFound";
import AuthTemplate from "../templates/auth/auth.template";
import vader from "../assets/images/vader.png";

const Notfound = () => {
    return (
        <AuthTemplate background={vader}>
            <PageNotFound />
        </AuthTemplate>
    );
};

export default Notfound;
