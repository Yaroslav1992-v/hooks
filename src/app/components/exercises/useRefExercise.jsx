import React, { useRef, useState, useEffect } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const clickRef = useRef();
    const [state, setState] = useState("false");
    const handleClick = () => {
        setState((prevState) => prevState === "false" ? "true" : "false");
    };
    useEffect(() => {
        clickRef.current.style.height = state === "false" ? "40px" : "150px";
        clickRef.current.style.width = state === "false" ? "60px" : "80px";
        clickRef.current.textContent = state === "false" ? "блок" : "text";
    }, [state]);
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    color: "white"
                }}
                ref={clickRef}
            >
                <small></small>
            </div>
            <button onClick={handleClick} className="btn btn-secondary">Изменить кнопку</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
