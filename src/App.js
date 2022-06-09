import "./App.css";
import { DisplayComp } from "./DisplayComp";
import { ButtonArea } from "./ButtonArea";
import { useState } from "react";
function App() {
  const [str, setStr] = useState("");

  const handleOnClick = (value) => {
    setStr(str + value);
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
          <DisplayComp str={str} />
          {/* <!-- calculator input &buttons --> */}
          <ButtonArea handleOnClick={handleOnClick} />
        </div>
      </div>
      <div className="circle"></div>
    </div>
  );
}

export default App;
