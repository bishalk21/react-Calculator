import "./App.css";
import { DisplayComp } from "./DisplayComp";
import { ButtonArea } from "./ButtonArea";
import { useState } from "react";
import a from "/Users/bishal/Library/CloudStorage/OneDrive-Personal/Full Stack/MyProject/react-prank-calculator/src/a.wav";

const operators = ["+", "-", "*", "/"];

function App() {
  const [str, setStr] = useState("");
  const [lastOperator, setLastOperator] = useState("");
  const [isPrank, setIsPrank] = useState(false);
  const [audio] = useState(new Audio(a));

  const handleOnClick = (value) => {
    isPrank && setIsPrank(false);
    // whatt to display on clicking specific buttons
    if (value === "AC") {
      setStr("");
      return;
    }
    if (value === "=") {
      return onTotal();
    }
    if (value === "C") {
      const temStr = str.slice(0, -1);
      // slice the last character
      setStr(temStr);
      return;
    }
    if (value === "π") {
      setStr(str * Math.PI);
      return;
    }
    if (operators.includes(value)) {
      setLastOperator(value);
      const lastChar = str.slice(-1);
      if (operators.includes(lastChar)) {
        // replace the last operator with new operator
        const strWithoutLastChar = str.slice(0, -1);
        setStr(strWithoutLastChar + value);
        return;
      }
    }

    if (value === ".") {
      if (lastOperator) {
        const positionOfLastOperator = str.lastIndexOf(lastOperator);
        // const beforeLastOperator = str.slice(0, positionOfLastOperator + 1);
        const afterLastOperator = str.slice(positionOfLastOperator + 1);

        if (afterLastOperator.includes(".")) {
          return;
        }
      } else {
        if (str.includes(".")) {
          return;
        }
      }
    }

    setStr(str + value);
  };

  // total value of the display
  const onTotal = () => {
    const prankValue = randomNumber();
    prankValue > 0 && audio.play() && setIsPrank(true);
    const total = eval(str) + prankValue;
    // eval is used to evaluate the string

    setStr(total.toFixed(2).toString());
    // toFixed(2) is used to display 2 decimal places
    // toString() is used to convert the number to string
  };

  const randomNumber = () => {
    const num = Math.ceil(Math.random() * 10);
    return num > 3 ? 0 : num;
  };

  return (
    // <!-- main content -->
    <div className="wrapper">
      {/* <!-- calc body --> */}
      <div className="calculator">
        {/* <!-- calculator header --> */}
        <div className="calc-header">
          <h1>Simple Calculator</h1>
        </div>

        {/* <!-- calculator body --> */}
        <div className="calc-body">
          {/* <!-- calculator input & display area --> */}
          <DisplayComp str={str} isPrank={isPrank} />
          {/* <!-- calculator input &buttons --> */}
          <ButtonArea handleOnClick={handleOnClick} />
        </div>
      </div>
      <div className="circle"></div>
    </div>
  );
}

export default App;
