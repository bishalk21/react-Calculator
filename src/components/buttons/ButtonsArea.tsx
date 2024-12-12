import Button from "./Button";

interface ButtonsAreaProps {
  handleOnClick: (value: string) => void;
}

const ButtonsArea = ({ handleOnClick }: ButtonsAreaProps) => {
  const buttonsArgs = [
    { className: "btn-ac", text: "AC" },
    { className: "btn-c", text: "C" },
    { className: "btn-divide", text: "/" },
    { className: "btn-multiply", text: "*" },
    { className: "btn-seven", text: "7" },
    { className: "btn-eight", text: "8" },
    { className: "btn-nine", text: "9" },
    { className: "btn-minus", text: "-" },
    { className: "btn-four", text: "4" },
    { className: "btn-five", text: "5" },
    { className: "btn-six", text: "6" },
    { className: "btn-plus", text: "+" },
    { className: "btn-one", text: "1" },
    { className: "btn-two", text: "2" },
    { className: "btn-three", text: "3" },
    { className: "btn-ans", text: "=" },
    { className: "btn-dot", text: "." },
    { className: "btn-zero", text: "0" },
  ];

  return (
    <>
      <div className="btns">
        {buttonsArgs.map((button) => (
          <Button
            key={button.className}
            {...button}
            handleOnClick={handleOnClick}
          />
        ))}
        {/* <div className="btn-ac">AC</div>
        <div className="btn-c">C</div>
        <div className="btn-divide">/</div>
        <div className="btn-multiply">*</div>

        <div className="btn-seven">7</div>
        <div className="btn-eight">8</div>
        <div className="btn-nine">9</div>
        <div className="btn-minus">-</div>

        <div className="btn-4">4</div>
        <div className="btn-five">5</div>
        <div className="btn-six">6</div>
        <div className="btn-plus">+</div>

        <div className="btn-one">1</div>
        <div className="btn-two">2</div>
        <div className="btn-three">3</div>
        <div className="btn-ans">=</div>

        <div className="btn-dot">.</div>
        <div className="btn-zero">0</div> */}
      </div>
    </>
  );
};

export default ButtonsArea;
