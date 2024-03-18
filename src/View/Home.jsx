import React from "react";

import { userIcons } from "../Constant/svgs";
import EntrollCourseTiles from "../Components/Home/EntrollCourseTiles";
import CoursesList from "../Components/Home/CoursesList";
import * as images from "../Constant/images";
import TaskNotifications from "../Components/Home/TaskNotifications";
import { Store } from "../ContextAPI/Context";
import ClassView from "../Components/Teacher/ClassView";
import QuickMessages from "../Components/Teacher/QuickMessages";
import Course from "../Components/Common/Course";
const Home = () => {
  const { auth } = Store();
  const user = auth.user;
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
      <div className="col-lg-12 ">
        <div className="row ">
          <div className="col-12 col-md-8">
            <div className="CoursesDetails">
              <h3>My Courses</h3>
              {user === "Student" ? (
                CoursesListValue.map((item, index) => (
                  <CoursesList
                    key={index} 
                    id={index}
                    imgesLect={item.imgesLect}
                    tagLect={item.tagLect}
                    headingLect={item.headingLect}
                    pragraphLect={item.pragraphLect}
                    durationLect={item.durationLect}
                    completedLect={item.completedLect}
                  />
                ))
              ) : (
                <Course useToggle={false} count={3} />
              )}
            </div>
          </div>
          <div className="align-self-start mt-4 col-12 col-md-4 ">
            <div className="taskListView shadow">
              <h4 className="mb-4">Tasks</h4>
              <TaskNotifications />
            </div>
          </div>
        </div>
        {user === "Teacher" && (
          <div className="row mt-5">
            <div className="col-12 col-md-8">
              <h3 className="myClassesHeading">My Classes</h3>
              <div className="row">
                <ClassView />
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-stretch">
              <QuickMessages />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
