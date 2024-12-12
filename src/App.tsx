import { useState } from "react";
import ButtonsArea from "./components/buttons/ButtonsArea";
import Display from "./components/display/Display";

const operators = ["+", "-", "*", "/"];

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [lastOperator, setLastOperator] = useState("");

  const evalExpression = (expression: string) => {
    let result;
    try {
      result = new Function(`return ${expression}`)();
      return parseFloat(result.toFixed(10));
    } catch (error) {
      console.error(error);
      throw new Error("Invalid expression");
    }
  };

  const ResultFinal = () => {
    try {
      const result = evalExpression(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      console.error(error);
      setDisplayValue("Invalid expression");
    }
  };

  const handleOnClick = (value: string) => {
    if (value === "AC") {
      setDisplayValue("");
      return;
    }

    if (value === "C") {
      setDisplayValue(displayValue.slice(0, -1));
      return;
    }

    if (operators.includes(value)) {
      setLastOperator(value);
      const lastChar = displayValue.slice(-1);
      if (operators.includes(lastChar)) {
        const strWithoutLastChar = displayValue.slice(0, -1);
        setDisplayValue(strWithoutLastChar + value);
        return;
      }
    }

    if (value === ".") {
      if (lastOperator) {
        const lastOperatorIndex = displayValue.indexOf(lastOperator);
        const lastOperand = displayValue.slice(lastOperatorIndex + 1);
        if (lastOperand.includes(".")) {
          return;
        }
      } else {
        if (displayValue.includes(".")) {
          return;
        }
      }
      if (
        displayValue === "" ||
        operators.includes(displayValue[displayValue.length - 1])
      ) {
        setDisplayValue(displayValue + "0.");
        return;
      }
    }

    if (value === "=") {
      if (displayValue === "") {
        return;
      }
      ResultFinal();
      return;
    }

    setDisplayValue(displayValue + value);
  };

  return (
    <>
      <div className="container">
        <div className="calculator-body">
          <Display displayValue={displayValue} />
          <ButtonsArea handleOnClick={handleOnClick} />
        </div>
      </div>
    </>
  );
}

export default App;
