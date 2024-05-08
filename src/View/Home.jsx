import React, { useState, useRef } from "react";
import EntrollCourseTiles from "../Components/Home/EntrollCourseTiles";
import CoursesList from "../Components/Home/CoursesList";
import * as images from "../Constant/images";
import TaskNotifications from "../Components/Home/TaskNotifications";
import { Store } from "../ContextAPI/Context";
import ClassView from "../Components/Teacher/ClassView";
import QuickMessages from "../Components/Teacher/QuickMessages";
import Course from "../Components/Common/Course";
import { chatSvg } from "../Constant/svgs";
import Chatbot from "../Components/Common/Chatbot";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import ChildCards from "../Components/parent/ChildCards";
import WelcomeSection from "../Components/Common/WelcomeSection";
import UpcomingClasses from "../Components/parent/UpcomingClasses";

const Home = () => {
  const [chatOpened, setChatOpened] = useState(false);
  const chatRef = useRef(null);
  const { auth } = Store();
  const user = auth.user;

  const [CoursesListValue, setCourseList] = useState([
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
  ]);
  const handleChatClick = () => {
    setChatOpened(!chatOpened);
  };

  const chatVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" }, // Adjust duration and easing as desired
    },
    closed: {
      opacity: 0,
      y: "100%", // Adjust y-axis offset based on your layout needs
      transition: { duration: 0.5, ease: "easeInOut" }, // Adjust duration and easing as desired
    },
  };

  return (
    <>
      <section className="dashboardWrapper d-flex flex-column ">
        {/* <div className="welcomeBox">
          <div className="logoWithText d-flex justify-content-start align-items-start flex-wrap">
            <div className="welcomeTxtP">
              <div className="mt-2">
                <h6>Welcome back, John!</h6>
                <p>Always stay updated in your {user} portal</p>
              </div>
              {user === "parent" && <ChildCards />}
              {user === "teacher" ||
                (user === "student" && (
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
                ))}
            </div>
          </div>
        </div> */}
        {user === "parent" ? null : <WelcomeSection user={user} />}
        {user === "teacher" && (
          <div className="col-lg-12 ">
            <div className="row ">
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
        )}
        {user === "student" ? (
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="CoursesDetails">
                <h3 className="myClassesHeading">My Courses</h3>
                <>
                  {CoursesListValue.map((item, index) => (
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
                  ))}
                </>
              </div>
            </div>
            <div className="align-self-start mt-4 col-12 col-md-4 ">
              <div className="taskListView shadow">
                <h4 className="mb-4">Tasks</h4>
                <TaskNotifications />
              </div>
            </div>
          </div>
        ) : null}
        {user === "parent" && (
          <>
            <div className="row">
              <div className="col-md-9">Student Performance</div>
              <div className="col-md-3">
                <div className="taskListView shadow">
                  <h4 className="mb-4">Tasks</h4>
                  <TaskNotifications />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mt-4">
                <UpcomingClasses />
              </div>

              <div className="col-md-3 mt-4">
                <UpcomingClasses />
              </div>

              <div className="col-md-3 mt-4">
                <UpcomingClasses />
              </div>

              <div className="col-12 col-md-3 d-flex align-items-stretch">
                <QuickMessages />
              </div>
            </div>
          </>
        )}
        <AnimatePresence>
          <div
            className={`chatbotIconWrapper ${
              chatOpened ? "chatOpened" : "chatClosed"
            }`}
            onClick={handleChatClick}
          >
            {chatOpened ? <X className="closeIcon" /> : chatSvg}
          </div>

          <motion.div
            ref={chatRef}
            variants={chatVariants}
            animate={chatOpened ? "open" : "closed"}
            style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          >
            {chatOpened ? <Chatbot /> : null}
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
};

export default Home;
