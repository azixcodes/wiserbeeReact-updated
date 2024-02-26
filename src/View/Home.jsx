import React from "react";

import { userIcons } from "../Constant/svgs";
import EntrollCourseTiles from "../Components/Home/EntrollCourseTiles";
import CoursesList from "../Components/Home/CoursesList";
import * as images from "../Constant/images";
import TaskNotifications from "../Components/Home/TaskNotifications";

const Home = () => {
  const EntrollCourseValue = [
    {
      id:'1',
      heading:'Courses',
      price:'1,240'
    },
    {
      id:'2',
      heading:'Courses',
      price:'1,240'
    },
    {
      id:'3',
      heading:'Courses',
      price:'1,240'
    },
    {
      id:'4',
      heading:'Courses',
      price:'1,240'
    }
  ]
  const CoursesListValue = [
    {
      id:'1',
      imgesLect:images.courseImges,
      tagLect:"4D Animation",
      headingLect:"Learning Maxon 4D Training Course",
      pragraphLect:"Always stay updated in your student portal",
      durationLect:"15 Lessons (10h 5m)",
      completedLect:"65%"
    },
    {
      id:'1',
      imgesLect:images.courseImges2,
      tagLect:"4D Animation",
      headingLect:"Learning Maxon 4D Training Course",
      pragraphLect:"Always stay updated in your student portal",
      durationLect:"15 Lessons (10h 5m)",
      completedLect:"65%"
    },
  ]
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
              {EntrollCourseValue.map((item,index)=>(
                <EntrollCourseTiles id={index} heading={item.heading} price={item.price} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="courseTaskWrapper d-flex w-100  gap-4">
        <div className="CoursesDetails">
          <h3>My Courses</h3>
          {CoursesListValue.map((item,index)=>(
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
        <div className="taskListView">
          <h4>Tasks</h4>
          <TaskNotifications />
        </div>
      </div>
    </section>
  );
};

export default Home;
