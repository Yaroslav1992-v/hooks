import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogIn, onLogOut, isAuth }) => {
    return <>{isAuth ? <button className="btn btn-secondary" onClick={onLogOut}>Выйти из системы</button>
        : <button className="btn btn-primary" onClick={onLogIn}>Войти</button>}</>;
};
SimpleComponent.propTypes = {
    onLogIn: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};
export default SimpleComponent;
