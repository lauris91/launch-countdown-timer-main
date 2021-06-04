import React from "react";

const FlipUnitContainer = ({ unit, digit, shuffle }) => {
  let currentDigit = digit;
  let nextDigit = parseInt(digit) + 1;

  if (unit !== "hours") {
    nextDigit = nextDigit === 60 ? 0 : nextDigit;
  } else {
    nextDigit = nextDigit === 24 ? 0 : nextDigit;
  }

  if (nextDigit < 10) {
    nextDigit = `0${nextDigit}`;
  }

  const digit1 = !shuffle ? currentDigit : nextDigit;
  const digit2 = shuffle ? currentDigit : nextDigit;

  // shuffle animations
  const animation1 = !shuffle ? "unfold" : "fold";
  const animation2 = shuffle ? "unfold" : "fold";

  return (
    <React.Fragment>
      <div className="unit-box__number">
        <div className="uppercard">
          <span>{currentDigit}</span>
        </div>
        <div className="lowercard">
          <span>{nextDigit}</span>
        </div>
        <div className={`flip-card ${animation1}`}>
          <span>{digit1}</span>
        </div>
        <div className={`flip-card ${animation2}`}>
          <span>{digit2}</span>
        </div>
      </div>
      <div className="unit-box__text">{unit}</div>
    </React.Fragment>
  );
};

export default FlipUnitContainer;
