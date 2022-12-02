import React from "react";

const Button = ({ button, filter }) => {
  return (
    <div className="buttons">
      {button.map((field, i) => {
        return (
          <button type="button" onClick={() => filter(field)} className="btn">
            {field}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
