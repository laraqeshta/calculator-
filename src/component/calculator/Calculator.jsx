import react from "react";
import { useState } from "react";
//style
import "./Calculator.css";

const Calculator = () => {
  //state
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const CreatDigite = () => {
    const digite = [];

    for (let i = 1; i < 10; i++) {
      digite.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digite;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <div className="calculator">
      <div className="display">
        {result ? <span>({result})</span> : ""} &nbsp;
        {calc || "0"}
      </div>

      <div className="operation">
        <button onClick={() => updateCalc("/")}>/</button>
        <button onClick={() => updateCalc("*")}>*</button>
        <button onClick={() => updateCalc("+")}>+</button>
        <button onClick={() => updateCalc("-")}>-</button>
        <button onClick={() => deleteLast()}>DEL</button>
      </div>

      <div className="digits">
        {CreatDigite()}
        <button onClick={() => updateCalc("0")}>0</button>
        <button onClick={() => updateCalc(".")}>.</button>
        <button onClick={() => calculate()}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
