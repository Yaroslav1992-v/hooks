import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render buttun");
    });
    return <button className="btn btn-primary" onClick={onLogOut}>Log Out</button>;
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) { return false; };
    return true;
};
const MemorizeLogOutButton = React.memo(LogOutButton, areEqual);
const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return <><MemorizeLogOutButton onLogOut={handleLogOut} />
        <button className="btn btn-primary" onClick={() => setState(!state)}>initiate rerender</button></>;
};

export default MemoWithUseCallbackExample;
