import { useState, useEffect } from "react";
import picture from "../../assets/Photo_Resized.jpeg";

import { useAdd } from "../../hooks/useAdd";
import { useSubtract } from "../../hooks/useSubtract";
import { useMultiply } from "../../hooks/useMultiply";
import { useDivide } from "../../hooks/useDivide";
import { usePower } from "../../hooks/usePower";
import {Calculator as StyledCalc} from "../styled/Calculator.ts";

export default function Projects() {
    useEffect(() => {
        document.title = "Projects|Viren Arora";
    }, []);


    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [result, setResult] = useState<number | string>("");

    // Hooks
    const { add } = useAdd();
    const { subtract } = useSubtract();
    const { multiply } = useMultiply();
    const { divide } = useDivide();
    const { power } = usePower();

    /* Helper Functions:*/
    const getNumbers = (): [number, number] => {
        const a = Number(num1);
        const b = Number(num2);
        return [a, b];
    };
    /*  Takes a computed result and stores it into state so it appears on screen */
    const displayResult = (res: number | string) => {
        setResult(res);
    };

    /* The below functions are event handlers each one runs when the corresponding button is pressed, by user */
    const addNumbers = () => {
        const [a, b] = getNumbers();           /* used the help function to get input every time a button is pressed */
        displayResult(add(a, b));     /* perform addition and show result */
    };

    const subtractNumbers = () => {
        const [a, b] = getNumbers();
        displayResult(subtract(a, b));        /* perform subtraction and show result */
    };

    const multiplyNumbers = () => {
        const [a, b] = getNumbers();
        displayResult(multiply(a, b));            /* perform multiplication and show result */
    };

    const divideNumbers = () => {
        const [a, b] = getNumbers();
        displayResult(divide(a, b));               /* perform division and show result */
    };

    const powerNumbers = () => {
        const [a, b] = getNumbers();
        displayResult(power(a, b));
    };

    const clearFields = () => {
        setNum1("");
        setNum2("");
        setResult("");
    };

    return (
        <StyledCalc>
            <img src={picture} alt="Viren Arora's Picture" />
            <div className="calculator">
                <h2>My calculator project! Enjoy crunching numbers!</h2>

                <label htmlFor="one"> Enter a number </label>
                <input
                    id="one"
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />

                <label htmlFor="two"> Enter a number </label>
                <input
                    id="two"
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />

                <div className="buttons">    {/* Each button triggers one of the event handler functions above */}
                    <button onClick={addNumbers}>+</button>
                    <button onClick={subtractNumbers}>-</button>
                    <button onClick={multiplyNumbers}>*</button>
                    <button onClick={divideNumbers}>/</button>
                    <button onClick={powerNumbers}>**</button>
                    <button onClick={clearFields}>Clear</button>
                </div>

                <h3 id="output" className={typeof result === "number" && result < 0 ? "negative" : ""}>    {/* assigned class according to ternary logic, styling is in calculator.ts */}
                    {result}
                </h3>
            </div>
        </StyledCalc>
    );
}
