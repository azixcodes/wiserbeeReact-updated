import React from "react";

import { userIcons } from "../Constant/svgs";
import EntrollCourseTiles from "../Components/Home/EntrollCourseTiles";
import CoursesList from "../Components/Home/CoursesList";
import * as images from "../Constant/images";
import TaskNotifications from "../Components/Home/TaskNotifications";

const Home = () => {
  const EntrollCourseValue = [
    {
      id: "1",
      heading: "Courses",
      price: "1,240",
    },
    {
      id: "2",
      heading: "Courses",
      price: "1,240",
    },
    {
      id: "3",
      heading: "Courses",
      price: "1,240",
    },
    {
      id: "4",
      heading: "Courses",
      price: "1,240",
    },
  ];
  const CoursesListValue = [
    {
      id: "1",
      imgesLect: images.courseImges,
      tagLect: "4D Animation",
      headingLect: "Learning Maxon 4D Training Course",
      pragraphLect: "Always stay updated in your student portal",
      durationLect: "15 Lessons (10h 5m)",
      completedLect: "65%",
    },
    {
      id: "2",
      imgesLect: images.courseImges2,
      tagLect: "4D Animation",
      headingLect: "Learning Maxon 4D Training Course",
      pragraphLect: "Always stay updated in your student portal",
      durationLect: "15 Lessons (10h 5m)",
      completedLect: "65%",
    },
    {
      id: "1",
      imgesLect: images.courseImges2,
      tagLect: "4D Animation",
      headingLect: "Learning Maxon 4D Training Course",
      pragraphLect: "Always stay updated in your student portal",
      durationLect: "15 Lessons (10h 5m)",
      completedLect: "65%",
    },
    {
      id: "1",
      imgesLect: images.courseImges2,
      tagLect: "4D Animation",
      headingLect: "Learning Maxon 4D Training Course",
      pragraphLect: "Always stay updated in your student portal",
      durationLect: "15 Lessons (10h 5m)",
      completedLect: "65%",
    },
    // {
    //   id: "1",
    //   imgesLect: images.courseImges2,
    //   tagLect: "4D Animation",
    //   headingLect: "Learning Maxon 4D Training Course",
    //   pragraphLect: "Always stay updated in your student portal",
    //   durationLect: "15 Lessons (10h 5m)",
    //   completedLect: "65%",
    // },
    // {
    //   id: "1",
    //   imgesLect: images.courseImges2,
    //   tagLect: "4D Animation",
    //   headingLect: "Learning Maxon 4D Training Course",
    //   pragraphLect: "Always stay updated in your student portal",
    //   durationLect: "15 Lessons (10h 5m)",
    //   completedLect: "65%",
    // },
    // {
    //   id: "1",
    //   imgesLect: images.courseImges2,
    //   tagLect: "4D Animation",
    //   headingLect: "Learning Maxon 4D Training Course",
    //   pragraphLect: "Always stay updated in your student portal",
    //   durationLect: "15 Lessons (10h 5m)",
    //   completedLect: "65%",
    // },
  ];
  return (
    <section className="dashboardWrapper d-flex flex-column">
      <div className="welcomeBox">
        <div className="logoWithText d-flex justify-content-start align-items-start flex-wrap">
          <div className="userIcons d-flex justify-content-center align-items-center">
            {userIcons}
          </div>
          <div className="welcomeTxtP">
            <div className="mt-2">
              <h6>Welcome back, John!</h6>
              <p>Always stay updated in your student portal</p>
            </div>
            <div className="welcomeTilles d-flex justify-content-start mt-5 flex-wrap">
              {EntrollCourseValue.map((item, index) => (
                <EntrollCourseTiles
                  key={index}
                  id={index}
                  heading={item.heading}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container"> */}
      <div className="row">
        <div className="col-lg-12">
          <div className="courseTaskWrapper d-lg-flex flex-lg-row justify-content-lg-between w-100 ">
            <div className="CoursesDetails col-md-12 col-lg-8">
              <h3>My Courses</h3>
              {CoursesListValue.map((item, index) => (
                <CoursesList
                  key={index} // Remember to add a unique key when using map
                  id={index}
                  imgesLect={item.imgesLect}
                  tagLect={item.tagLect}
                  headingLect={item.headingLect}
                  pragraphLect={item.pragraphLect}
                  durationLect={item.durationLect}
                  completedLect={item.completedLect}
                />
              ))}
            </div>
            <div className="taskListView customShadow align-self-start mt-4 sm-mt-0 col-md-12 col-lg-3">
              <h4 className="mb-4">Tasks</h4>
              <TaskNotifications />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* <div className="courseTaskWrapper  d-flex w-100  gap-4">
        <div className="CoursesDetails">
          <h3>My Courses</h3>
          {CoursesListValue.map((item, index) => (
            <CoursesList
              id={index}
              imgesLect={item.imgesLect}
              tagLect={item.tagLect}
              headingLect={item.headingLect}
              pragraphLect={item.pragraphLect}
              durationLect={item.durationLect}
              completedLect={item.completedLect}
            />
          ))}
        </div>
        <div className="taskListView customShadow align-self-start">
          <h4 className="mb-4">Tasks</h4>
          <TaskNotifications />
        </div>
      </div> */}
    </section>
    // <div class="container">
    //   <div class="row">
    //     <div class="col-sm d-lg-flex flex-lg-row flex-md-column justify-content-center align-items-center">
    //       <p>This is a small screen</p>
    //       <p>Flex direction: column</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
