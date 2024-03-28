import React from "react";
import "./test.css"; // Import your CSS file for styling


// Function to generate random class data
const generateRandomData = () => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timesOfDay = [
    "7AM",
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
  ];
  const classes = [];

  // Generate random classes
  for (let i = 0; i < 5; i++) {
    // Generate for each day of the week
    for (let j = 0; j < 8; j++) {
      // Generate for each time slot
      if (Math.random() > 0.5) {
        // Randomly decide if there's a class
        const className = `Class ${i}${j}`; // Example class name
        const day = daysOfWeek[i];
        const time = timesOfDay[j];
        classes.push({ className, day, time });
      }
    }
  }

  return classes;
};

const Timetable = () => {
  const classData = generateRandomData(); // Generate random class data

  return (
    <div className="timetable">
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          {classData.map((classInfo, index) => (
            <tr key={index}>
              <td>{classInfo.time}</td>
              <td className={classInfo.day === "Monday" ? "class-cell" : ""}>
                {classInfo.day === "Monday" && classInfo.className}
              </td>
              <td className={classInfo.day === "Tuesday" ? "class-cell" : ""}>
                {classInfo.day === "Tuesday" && classInfo.className}
              </td>
              <td className={classInfo.day === "Wednesday" ? "class-cell" : ""}>
                {classInfo.day === "Wednesday" && classInfo.className}
              </td>
              <td className={classInfo.day === "Thursday" ? "class-cell" : ""}>
                {classInfo.day === "Thursday" && classInfo.className}
              </td>
              <td className={classInfo.day === "Friday" ? "class-cell" : ""}>
                {classInfo.day === "Friday" && classInfo.className}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
