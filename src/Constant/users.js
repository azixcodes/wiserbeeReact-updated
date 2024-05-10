import { chats } from "./chats";

const getRandomNumber = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const users = [
  {
    name: chats[0].user,
    class: "class I",
    avatar: chats[0].dp,
    percentage: "60",
    isActive: true,
    graphData: [
      {
        month: "Jan",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Feb",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Mar",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Apr",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "May",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Jun",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "July",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },

      {
        month: "Aug",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Sep",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Oct",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Nov",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Dec",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
    ],
    pieData: [
      { name: "English", value: 400 },
      { name: "Maths", value: 300 },
      { name: "Biology", value: 300 },
      { name: "Physics", value: 200 },
    ],
  },
  {
    name: chats[1].user,
    class: "class III",
    avatar: chats[1].dp,
    percentage: "80",
    isActive: false,
    graphData: [
      {
        month: "Jan",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Feb",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Mar",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },

      {
        month: "Apr",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "May",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Jun",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Jul",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Aug",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Sep",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Oct",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Nov",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Dec",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
    ],
    pieData: [
      { name: "English", value: 200 },
      { name: "Maths", value: 400 },
      { name: "Biology", value: 100 },
      { name: "Physics", value: 300 },
    ],
  },
  {
    name: chats[2].user,
    class: "class IV",
    avatar: chats[0].dp,
    percentage: "40",
    isActive: false,
    graphData: [
      {
        month: "Jan",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Feb",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Mar",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },

      {
        month: "Apr",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "May",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Jun",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Jul",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Aug",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Sep",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Oct",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Nov",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
      {
        month: "Dec",
        assesment: getRandomNumber(),
        attendance: getRandomNumber(),
        performance: getRandomNumber(),
      },
    ],
    pieData: [
      { name: "English", value: 200 },
      { name: "Maths", value: 400 },
      { name: "Biology", value: 100 },
      { name: "Physics", value: 300 },
    ],
  },
];
