import React, { useState, useEffect } from "react";

import FlipUnitContainer from "./FlipUnitContainer";

const CountdownContainer = ({ days, hours, minutes, seconds }) => {
  const [shuffleDays, setShuffleDays] = useState(false);
  const [shuffleHours, setShuffleHours] = useState(false);
  const [shuffleMinutes, setShuffleMinutes] = useState(false);
  const [shuffleSeconds, setShuffleSeconds] = useState(false);

  useEffect(() => {
    setShuffleMinutes(!shuffleMinutes);
  }, [minutes]);

  useEffect(() => {
    setShuffleSeconds(!shuffleSeconds);
  }, [seconds]);

  useEffect(() => {
    setShuffleHours(!shuffleHours);
  }, [hours]);

  useEffect(() => {
    setShuffleDays(!shuffleDays);
  }, [days]);

  return (
    <React.Fragment>
      <div className="unit-box">
        <FlipUnitContainer unit={"days"} digit={days} shuffle={shuffleDays} />
      </div>
      <div className="unit-box">
        <FlipUnitContainer
          unit={"hours"}
          digit={hours}
          shuffle={shuffleHours}
        />
      </div>
      <div className="unit-box">
        <FlipUnitContainer
          unit={"minutes"}
          digit={minutes}
          shuffle={shuffleMinutes}
        />
      </div>
      <div className="unit-box">
        <FlipUnitContainer
          unit={"seconds"}
          digit={seconds}
          shuffle={shuffleSeconds}
        />
      </div>
    </React.Fragment>
  );
};

export default CountdownContainer;
