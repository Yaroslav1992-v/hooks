import React from "react";
import CardWrapper from "../common/Card";
const hocComponent = (Component) => (props) => {
    const handleLogIn = () => {
        localStorage.setItem("auth", "token");
    };
    const handleLogOut = () => {
        localStorage.removeItem("auth");
    };
    const isAuth = !!localStorage.getItem("auth");
    return <><CardWrapper><Component {...props} isAuth={isAuth} onLogIn={handleLogIn} onLogOut={handleLogOut} /></CardWrapper> </>;
};

export default hocComponent;
