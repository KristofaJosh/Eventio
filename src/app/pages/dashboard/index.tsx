import React from "react";
import { useAppSelector } from "../../store";
import AccountHandler from "../../components/molecules/accountHandler";

const Dashboard = () => {
    const { session } = useAppSelector((state) => state.auth);

    return (
        <div>
            <AccountHandler name={`${session.firstName} ${session.lastName}`} />
            Dashboard
        </div>
    );
};

export default Dashboard;
