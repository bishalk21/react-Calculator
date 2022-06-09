import "./App.css";
import { DisplayComp } from "./DisplayComp";
import { ButtonArea } from "./ButtonArea";
function App() {
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
          <DisplayComp />
          {/* <!-- calculator input &buttons --> */}
          <ButtonArea />
        </div>
      </div>
      <div className="circle"></div>
    </div>
  );
}

export default App;
