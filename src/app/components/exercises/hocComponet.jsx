import React, { useState } from "react";
import CardWrapper from "../common/Card";
const hocComponent = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("auth"));
    const handleLogIn = () => {
        setIsAuth(!isAuth);
    };
    const handleLogOut = () => {
        setIsAuth(!isAuth);
    };
    return <><CardWrapper><Component {...props} isAuth={isAuth} onLogIn={handleLogIn} onLogOut={handleLogOut} /></CardWrapper> </>;
};

export default hocComponent;
