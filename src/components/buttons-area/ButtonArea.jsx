import Buttons from "./buttons/Buttons";

const ButtonArea = ({ handleOnClick }) => {
  const btnsArg = [
    {
      label: "AC",
      className: "btn-ac",
    },
    {
      label: "C",
      className: "btn-del",
    },
    {
      label: "/",
      className: "btn-div",
    },
    {
      label: "*",
      className: "btn-multi",
    },
    {
      label: "7",
      className: "btn-seven",
    },
    {
      label: "8",
      className: "btn-eight",
    },
    {
      label: "9",
      className: "btn-nine",
    },
    {
      label: "+",
      className: "btn-plus",
    },
    {
      label: "4",
      className: "btn-four",
    },
    {
      label: "5",
      className: "btn-five",
    },
    {
      label: "6",
      className: "btn-six",
    },
    {
      label: "-",
      className: "btn-min",
    },
    {
      label: "1",
      className: "btn-one",
    },
    {
      label: "2",
      className: "btn-two",
    },
    {
      label: "3",
      className: "btn-three",
    },
    {
      label: "=",
      className: "btn-ans",
    },
    {
      label: ".",
      className: "btn-dot",
    },
    {
      label: "0",
      className: "btn-zero",
    },
  ];

  return (
    <div className="btns">
      {/* <div onclick="pAC()" className="btn-ac">AC</div>
            <div onclick="pDel()" className="btn-del">C</div>
            <div onclick="pDivide()" className="btn-div">/</div>
            <div onclick="pMultply()" className="btn-multi">*</div>

            <div onclick="p7()" className="btn-sev">7</div>
            <div onclick="p8()" className="btn-eight">8</div>
            <div onclick="p9()" className="btn-nine">9</div>
            <div onclick="pPlus()" className="btn-plus">+</div>

            <div onclick="p4()" className="btn-four">4</div>
            <div onclick="p5()" className="btn-fiv">5</div>
            <div onclick="p6()" className="btn-six">6</div>
            <div onclick="pMinus()" className="btn-min">-</div>

            <div onclick="p1()" className="btn-one">1</div>
            <div onclick="p2()" className="btn-two">2</div>
            <div onclick="p3()" className="btn-thr">3</div>
            <div onclick="pEqual()" className="btn-ans">=</div>

            <div onclick="pDot()" className="btn-dot">.</div>
            <div onclick="p0()" className="btn-zero">0</div>  */}

      {/* <div className="btn-ac">AC</div>
      <div className="btn-del">C</div>
      <div className="btn-div">/</div>
      <div className="btn-multi">*</div>

      <div className="btn-sev">7</div>
      <div className="btn-eight">8</div>
      <div className="btn-nine">9</div>
      <div className="btn-plus">+</div>

      <div className="btn-four">4</div>
      <div className="btn-fiv">5</div>
      <div className="btn-six">6</div>
      <div className="btn-min">-</div>

      <div className="btn-one">1</div>
      <div className="btn-two">2</div>
      <div className="btn-thr">3</div>
      <div className="btn-ans">=</div>

      <div className="btn-dot">.</div>
      <div className="btn-zero">0</div> */}

      {btnsArg.map((button, i) => (
        <Buttons key={i} {...button} handleOnClick={handleOnClick} />
      ))}
    </div>
  );
};

export default ButtonArea;
