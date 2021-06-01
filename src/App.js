import React, { Fragment } from "react";
import Countdown from "react-countdown";

function App() {
  return (
    <Fragment>
      <div className="wrapper">
        <div className="main">
          <div className="main__title">We`re lauching soon</div>
          <div className="main__countdown-container">
            <Countdown
              date={Date.now() + 120000000}
              autoStar
              renderer={({ days, hours, seconds, minutes }) => {
                return (
                  <Fragment>
                    <div className="unit-box">
                      <div className="unit-box__number">
                        <div className="unit-box__number__layer-top"></div>
                        <div className="unit-box__number__layer"> </div>
                        <span>{days}</span>
                      </div>
                      <div className="unit-box__text">days</div>
                    </div>
                    <div className="unit-box">
                      <div className="unit-box__number">
                        <div className="unit-box__number__layer-top"></div>
                        <div className="unit-box__number__layer"> </div>
                        <span>{hours}</span>
                      </div>
                      <div className="unit-box__text">hours</div>
                    </div>
                    <div className="unit-box">
                      <div className="unit-box__number">
                        <div className="unit-box__number__layer-top"></div>
                        <div className="unit-box__number__layer"> </div>
                        <span>{minutes}</span>
                      </div>
                      <div className="unit-box__text">minutes</div>
                    </div>
                    <div className="unit-box">
                      <div className="unit-box__number">
                        <div className="unit-box__number__layer-top"></div>
                        <div className="unit-box__number__layer"> </div>
                        <span>{seconds}</span>
                      </div>
                      <div className="unit-box__text">seconds</div>
                    </div>
                  </Fragment>
                );
              }}
            />
          </div>
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
