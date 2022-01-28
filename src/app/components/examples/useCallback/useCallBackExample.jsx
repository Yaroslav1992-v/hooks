import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallBack = useRef(0);
    const withCallBack = useRef(0);
    const handleChange = ({ target }) => {
        setData((preveState) => ({ ...preveState, [target.name]: target.value }));
    };
    const validateWithOutCallBack = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withOutCallBack.current++;
    }, [validateWithOutCallBack]);
    const validateWithCallBack = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallBack]);
    useEffect(() => {
        validateWithOutCallBack(data);
        validateWithCallBack(data);
    }, [data]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render WithOut Callback: {withOutCallBack.current}</p>
            <p>Render With Callback: {withCallBack.current}</p>
            <label htmlFor="email" className="form-label">Email</label>
            <input name="email" value={data.email || ""} onChange={handleChange} type="email" className="form-control" id="email" />
        </CardWrapper>
    );
};

export default UseCallBackExample;
