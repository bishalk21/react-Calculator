import React from "react";

interface DisplayProps {
  displayValue: string;
}

const Display: React.FC<DisplayProps> = ({ displayValue }) => {
  return <div className="display">{displayValue || "0.00"}</div>;
};

export default Display;
