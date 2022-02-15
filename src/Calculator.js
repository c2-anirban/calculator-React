import React from "react";

const Calculator = () => {
  return (
    <div>
      {" "}
      <div className="main-container">
        <h1>Calculator</h1>
        <input className="input-field" value="0" readonly />
        <div className="buttons-container">
          <button className="btn other-btn" value="AC">
            AC
          </button>
          <button className="btn other-btn" value="del">
            ←
          </button>
          <button className="btn other-btn" value="sqrt">
            √x
          </button>
          <button className="btn operator-btn" value="/">
            ÷
          </button>

          <button className="btn operand-btn" value="7">
            7
          </button>
          <button className="btn operand-btn" value="8">
            8
          </button>
          <button className="btn operand-btn" value="9">
            9
          </button>
          <button className="btn operator-btn" value="*">
            x
          </button>

          <button className="btn operand-btn" value="4">
            4
          </button>
          <button className="btn operand-btn" value="5">
            5
          </button>
          <button className="btn operand-btn" value="6">
            6
          </button>
          <button className="btn operator-btn" value="-">
            -
          </button>
          <button className="btn operand-btn" value="1">
            1
          </button>
          <button className="btn operand-btn" value="2">
            2
          </button>
          <button className="btn operand-btn" value="3">
            3
          </button>
          <button className="btn operator-btn" value="+">
            +
          </button>

          <button className="btn operand-btn" value="0">
            0
          </button>
          <button className="btn operand-btn" value=".">
            .
          </button>
          <button className="btn operand-btn" value="changeSign">
            +/-
          </button>
          <button className="btn operator-btn" value="=">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
