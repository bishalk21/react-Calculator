const Buttons = ({ label, className, handleOnClick }) => {
  return (
    <div className={className} onClick={() => handleOnClick(label)}>
      {label}
    </div>
  );
};

export default Buttons;
