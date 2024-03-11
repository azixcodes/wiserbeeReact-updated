import { useEffect } from "react";
import "./style.css";
import { useState } from "react";

const ProgressbarPrimary = () => {
  const [perCent, setPercent] = useState(0);
  const [userCount, setUserCount] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer); // Clear the interval when perCent reaches 100
          return 100; // Ensure perCent is not greater than 100
        } else {
          return prev + 1.66;
        }
      });
      if (perCent <= 100) {
        setUserCount((prev) => {
          if (prev === 0) {
            return 0;
          } else return prev - 1;
        });
      } else {
        setUserCount(0);
      }
      if (perCent === 100) return;
    }, 1000);
    return () => clearInterval(timer);
  }, [perCent]);
  return (
    <div
      role="progressbar"
      aria-valuenow="65"
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ "--value": `${perCent}` }}
    >
      {userCount === 0 ? "00:00" : `00:${userCount}`}
    </div>
  );
};

export default ProgressbarPrimary;
