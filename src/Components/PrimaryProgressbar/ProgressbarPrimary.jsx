import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { getRequest } from "../../services";
import RadialSeparators from "./RadialSeparators";

const ProgressbarPrimary = ({ id }) => {
  const [duration, setDuration] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [percentage, setPercentage] = useState(0); // Start at 0

  useEffect(() => {
    const getSingleExam = async () => {
      try {
        const res = await getRequest(`/quiz/exam-quizes/${id}`);
        const data = await res.json();
        const durationInSeconds = data.duration_in_minutes * 60;
        setDuration(durationInSeconds);
        setTimeLeft(durationInSeconds); // Update timeLeft based on fetched duration
        setPercentage(0); // Start at 0
      } catch (err) {
        console.log(err);
      }
    };
    getSingleExam();
  }, [id]);

  useEffect(() => {
    if (timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          const elapsedTime = duration - newTimeLeft;
          setPercentage((elapsedTime / duration) * 100);
          return newTimeLeft;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timeLeft, duration]);

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={formatTime(timeLeft)}
        strokeWidth={10}
        styles={buildStyles({
          textSize: "16px",
          pathColor: `rgba(36, 23, 99,100)`,
          textColor: "rgba(36, 23, 99,100)",
          trailColor: "#AEB6BD",

          strokeLinecap: "butt",
        })}
      ></CircularProgressbar>
    </div>
  );
};

export default ProgressbarPrimary;
