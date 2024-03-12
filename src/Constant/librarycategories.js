import { headSetSvg, pageSvg, videoSvg } from "./svgs";

export const ratings = [
  {
    title: "Rating",
    content: [
      {
        stars: 4.5,
        label: "4.5 & upto(5.8k)",
      },
      {
        stars: 3.5,
        label: "3.5 & up (1.2K)",
      },
      {
        stars: 3.0,
        label: "3.0 & upto(867)",
      },
    ],
  },
];

export const categories = [
  {
    label: "Reading",
    icon: pageSvg,
  },
  {
    label: "Audio Recording",
    icon: headSetSvg,
  },
  {
    label: "Video Documentory",
    icon: videoSvg,
  },
];

export const genre = [
  {
    label: "Horror",
    ratings: "(3.2K)",
  },
  {
    label: "Mystery",
    ratings: "(1.4K)",
  },
  {
    label: "Thriller",
    ratings: "(809)",
  },
  {
    label: "Adventure",
    ratings: "548",
  },
  {
    label: "Music & Film",
    ratings: "(1.9K)",
  },
  {
    label: "Comedy",
    ratings: "(2.3K)",
  },
  {
    label: "Fantasy",
    ratings: "(753)",
  },
];

export const languages = ["English", "Urdu", "Persian", "Spanish"];
