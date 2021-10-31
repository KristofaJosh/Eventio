import React from "react";
import PageNotFound from "../../components/molecules/error/pageNotFound";
import AuthTemplate from "../../templates/auth/auth.template";

const Notfound = () => {
    return (
        <AuthTemplate>
            <PageNotFound />
        </AuthTemplate>
    );
};

export default Notfound;
