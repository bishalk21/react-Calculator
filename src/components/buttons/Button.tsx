type ButtonProps = {
  className: string;
  text: string;
  handleOnClick: (value: string) => void;
};

const Button = ({ className, text, handleOnClick }: ButtonProps) => {
  return (
    <div className={className} onClick={() => handleOnClick(text)}>
      {text}
    </div>
  );
};

export default Button;
