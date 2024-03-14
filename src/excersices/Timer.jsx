import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  // Din useEffect-kod här
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Timer: {seconds} sekunder</div>;
}

export default Timer;
