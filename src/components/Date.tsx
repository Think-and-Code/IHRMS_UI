import React, { useState, useEffect } from "react";

const DateComponent: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const updateDate = () => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setCurrentDate(formattedDate);
    };

    updateDate();

    const now = new Date();
    const timeUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0).getTime() -
      now.getTime();

    const timeoutId = setTimeout(() => {
      updateDate();
      setInterval(updateDate, 24 * 60 * 60 * 1000); 
    }, timeUntilMidnight);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="Date text-center">
      <h2 className="text-lg font-semibold">{currentDate}</h2>
    </div>
  );
};

export default DateComponent;
