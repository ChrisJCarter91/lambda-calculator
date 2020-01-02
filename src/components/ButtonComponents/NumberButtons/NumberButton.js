import React from "react";

const NumberButton = ({number, incrementCount}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={`num${incrementCount} number`}>{number}</button>
    </>
  );
};

export default NumberButton;
