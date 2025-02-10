import React, { useState, useEffect } from "react";

const Time: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      const formattedTime = date.toLocaleTimeString(); 
      setCurrentTime(formattedTime);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="Time text-center">
      <h2 className="text-lg font-semibold">{currentTime}</h2>
    </div>
  );
};

export default Time;
