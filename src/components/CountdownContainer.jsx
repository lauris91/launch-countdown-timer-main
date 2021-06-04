import React, { useState, useEffect } from "react";

import FlipUnitContainer from "./FlipUnitContainer";

const CountdownContainer = ({ days, hours, minutes, seconds }) => {
  const [shuffleDays, setShuffleDays] = useState(false);
  const [shuffleHours, setShuffleHours] = useState(false);
  const [shuffleMinutes, setShuffleMinutes] = useState(false);
  const [shuffleSeconds, setShuffleSeconds] = useState(false);

  useEffect(() => {
    setShuffleMinutes(!shuffleMinutes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minutes]);

  useEffect(() => {
    setShuffleSeconds(!shuffleSeconds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  useEffect(() => {
    setShuffleHours(!shuffleHours);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hours]);

  useEffect(() => {
    setShuffleDays(!shuffleDays);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
