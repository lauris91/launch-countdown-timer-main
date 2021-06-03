import React, { Fragment } from "react";
import Countdown from "react-countdown";

import CountdownContainer from "./components/CountdownContainer";

function App() {
  return (
    <Fragment>
      <div className="wrapper">
        <div className="main">
          <div className="main__title">We`re lauching soon</div>

          <Countdown
            date={Date.now() + 120000000}
            autoStar
            renderer={({ formatted: { days, hours, seconds, minutes } }) => {
              return (
                <div className="main__countdown-container">
                  <CountdownContainer
                    days={days}
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                  />
                </div>
              );
            }}
          />
        </div>
        <footer>
          <div className="social-box">
            <div className="social-box__facebook"></div>
            <div className="social-box__pinterest"></div>
            <div className="social-box__instagram"></div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export default App;
