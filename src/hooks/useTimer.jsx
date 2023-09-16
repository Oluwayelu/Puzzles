import { useState, useRef } from "react";

const useTimer = () => {
  const timer = useRef();
  const [seconds, setSeconds] = useState(0);

  const onStop = () => {
    clearInterval(timer.current);
    setSeconds(0);
  };
  const onStart = () => {
    timer.current = setInterval(() => {
      setSeconds((sec) => sec + 1);
    }, 1000);
  };

  const onPause = () => {
    clearInterval(timer.current);
  };

  const secToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = { hours, minutes, seconds };
    return obj;
  };

  return {
    onStart,
    onStop,
    onPause,
    time: secToTime(seconds),
  };
};

export default useTimer;
