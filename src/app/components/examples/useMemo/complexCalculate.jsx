import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
function factorial(n) {
    return factorial(n);
}
function runFactorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    const buttonColor = otherState ? "primary" : "secondary";
    useEffect(() => {
        console.log("render");
    });
    const fact = useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value ; {value}</p>
                <p>Result fact : {fact}</p>
                <button onClick={() => setValue((prevState) => prevState + 10)} className="btn-primary ms-md-2">Increment</button>
                <button onClick={() => setValue((prevState) => prevState - 10)} className="btn-primary ms-md-2">Decrement</button>
                <button onClick={() => setOtherState((prevState) => !prevState)} className={"ms-md-2 btn-" + buttonColor}>Change Color</button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
