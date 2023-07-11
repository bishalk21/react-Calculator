import { useState } from "react";
import "./App.css";
import DisplayComp from "./components/DisplayComp";
import ButtonArea from "./components/buttons-area/ButtonArea";

const operators = ["/", "*", "+", "-"];

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [lastOperator, setLastOperator] = useState("");

  const onTotal = () => {
    const total = eval(displayValue);
    setDisplayValue(total.toFixed(2).toString());
  };

  const handleOnClick = (value) => {
    if (value === "AC") {
      setDisplayValue("");
      return;
    }

    if (value === "C") {
      const delLastStr = displayValue.slice(0, -1);
      setDisplayValue(delLastStr);
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
        const positionOfLastOperator = displayValue.indexOf(lastOperator);
        const charAfterLastOper = displayValue.slice(
          positionOfLastOperator + 1
        );

        if (charAfterLastOper.includes(".")) {
          return;
        }
      } else {
        if (displayValue.includes(".")) {
          return;
        }
      }
    }

    if (value === "=") {
      onTotal();
      return;
    }

    setDisplayValue(displayValue + value);
  };

  return (
    <>
      <div className="app">
        <h1>Day 12 - 100 Days of Code</h1>
        <section className="main">
          <h3>Vite + React Calculator</h3>
          <div className="container">
            <DisplayComp displayValue={displayValue} />
            <ButtonArea handleOnClick={handleOnClick} />
          </div>
          <div className="circle"></div>
        </section>
      </div>
    </>
  );
}

export default App;
