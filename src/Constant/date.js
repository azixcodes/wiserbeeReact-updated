export const createDateInterval = (start_date, end_date) => {
  const startDate = new Date(start_date);
  const endDate = new Date(end_date);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const startMonth = months[startDate.getMonth()];
  const endMonth = months[endDate.getMonth()];

  const startDay = startDate.getDate();
  const endDay = endDate.getDate();

  return `${startDay}-${startMonth} to ${endDay}-${endMonth}`;
};

export const formatTime = (start_time, end_time) => {
  const [startHour, startMinute] = start_time.split(":").map(Number);
  const [endHour, endMinute] = end_time.split(":").map(Number);

  // Calculate total minutes for start and end times
  const startTotalMinutes = startHour * 60 + startMinute;
  const endTotalMinutes = endHour * 60 + endMinute;

  // Calculate the difference between end and start times
  const totalTimeInMinutes = endTotalMinutes - startTotalMinutes;

  return totalTimeInMinutes;
};
