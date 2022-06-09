import React from "react";

export const Button = ({ className, label, handleOnClick }) => {
  return (
    <div
      className={className}
      onClick={() => {
        handleOnClick(label);
      }}
    >
      {label}
    </div>
  );
};
