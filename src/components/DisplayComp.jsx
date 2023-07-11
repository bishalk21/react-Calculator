const DisplayComp = ({ displayValue }) => {
  return (
    <div id="display" className="display">
      {displayValue || "0.00"}
    </div>
  );
};

export default DisplayComp;
