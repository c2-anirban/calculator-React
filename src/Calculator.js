import React from "react";
import { useState, useEffect } from "react";

const Calculator = () => {
  const [prevValue, setPrevValue] = useState(0);
  const [nextValue, setNextValue] = useState("");
  const [opration, setOpration] = useState(null);
  const [result, setResult] = useState([]);

  const CalculatorOperations = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue,
  };

  useEffect(() => {}, [opration, prevValue, nextValue]);

  const performOperation = () => {
    let temp = CalculatorOperations[opration](
      parseFloat(prevValue),
      parseFloat(nextValue)
    );
    setOpration(null);
    setNextValue(String(temp));
    setPrevValue(null);
  };

  const handleNum = (number) => {
    setNextValue(nextValue === "0" ? number : nextValue + number);
  };

  const clearData = () => {
    console.log("You press AC");
    setNextValue("0");
    setPrevValue(0);
    console.log("Your data ia clear now");
  };

  const handleOperation = (event) => {
    let value = event.target.value;

    if (isNaN(value) === false) {
      console.log(`value is ${value}`);
      handleNum(parseInt(value));
    } else if (value in CalculatorOperations) {
      if (opration === null) {
        setOpration(value);
        setPrevValue(nextValue);
        setNextValue("");
        console.log(`opration is ${value}`);
      }
      if (opration) {
        console.log(`opration is ${value}`);
        setOpration(value);
      }
      if (prevValue && opration && nextValue) {
        let temp = [prevValue, opration, nextValue];
        setResult(eval(temp.join("")));

        performOperation();
      }
    } else if (value === "AC") {
      clearData();
    }
  };
  console.log(result);

  return (
    <div>
      {" "}
      <div className="main-container">
        <h1>Calculator</h1>
        <input className="input-field" value={nextValue} readOnly />
        <div className="buttons-container">
          <button
            className="btn other-btn"
            value={"AC"}
            onClick={handleOperation}
          >
            AC
          </button>
          <button
            className="btn other-btn"
            value={"del"}
            onClick={handleOperation}
          >
            ←
          </button>
          <button
            className="btn other-btn"
            value={"%"}
            onClick={handleOperation}
          >
            %
          </button>
          <button
            className="btn operator-btn"
            value={"/"}
            onClick={handleOperation}
          >
            ÷
          </button>

          <button
            className="btn operand-btn"
            value={"7"}
            onClick={handleOperation}
          >
            7
          </button>
          <button
            className="btn operand-btn"
            value={"8"}
            onClick={handleOperation}
          >
            8
          </button>
          <button
            className="btn operand-btn"
            value={"9"}
            onClick={handleOperation}
          >
            9
          </button>
          <button
            className="btn operator-btn"
            value={"*"}
            onClick={handleOperation}
          >
            x
          </button>

          <button
            className="btn operand-btn"
            value={"4"}
            onClick={handleOperation}
          >
            4
          </button>
          <button
            className="btn operand-btn"
            value={"5"}
            onClick={handleOperation}
          >
            5
          </button>
          <button
            className="btn operand-btn"
            value={"6"}
            onClick={handleOperation}
          >
            6
          </button>
          <button
            className="btn operator-btn"
            value={"-"}
            onClick={handleOperation}
          >
            -
          </button>
          <button
            className="btn operand-btn"
            value={"1"}
            onClick={handleOperation}
          >
            1
          </button>
          <button
            className="btn operand-btn"
            value={"2"}
            onClick={handleOperation}
          >
            2
          </button>
          <button
            className="btn operand-btn"
            value={"3"}
            onClick={handleOperation}
          >
            3
          </button>
          <button
            className="btn operator-btn"
            value={"+"}
            onClick={handleOperation}
          >
            +
          </button>

          <button
            className="btn operand-btn"
            value={"0"}
            onClick={handleOperation}
          >
            0
          </button>
          <button
            className="btn operand-btn"
            value={"."}
            onClick={handleOperation}
          >
            .
          </button>
          <button
            className="btn operand-btn"
            value={"changeSign"}
            onClick={handleOperation}
          >
            +/-
          </button>
          <button
            className="btn operator-btn"
            value={"="}
            onClick={handleOperation}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
