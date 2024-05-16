import { useState, useRef } from "react";
import CoursesList from "../Components/Home/CoursesList";
import * as images from "../Constant/images";
import TaskNotifications from "../Components/Home/TaskNotifications";

import ClassView from "../Components/Teacher/ClassView";
import QuickMessages from "../Components/Teacher/QuickMessages";
import Course from "../Components/Common/Course";
import { chatSvg } from "../Constant/svgs";
import Chatbot from "../Components/Common/Chatbot";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import WelcomeSection from "../Components/Common/WelcomeSection";
import UpcomingClasses from "../Components/parent/UpcomingClasses";
import Chart from "../Components/parent/analytics/Chart";

import { useSelector } from "react-redux";
const Home = () => {
  const users = useSelector((state) => state.parent.users);

  const activeUser = users.filter((user) => user.isActive === true);
  const [chatOpened, setChatOpened] = useState(false);

  const chatRef = useRef(null);
  const auth = JSON.parse(localStorage.getItem("user"));

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
        {user === "parent" ? null : <WelcomeSection user={user} />}
        {user === "teacher" && (
          <div className="col-lg-12 ">
            <div className="row ">
              <div className="col-md-8">
                <h3 className="myClassesHeading">My Courses</h3>
                <Course useToggle={false} count={3} homeRender={true} />
              </div>
              <div className="align-self-start mt-4 col-12 col-md-4 ">
                <div className="taskListView shadow">
                  <h4 className="mb-4">Tasks</h4>
                  <TaskNotifications />
                </div>
              </div>
            </div>
            {user === "teacher" && (
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
          <div className="container-fluid pr-0">
            <div className="row mt-4 gy-2">
              {/* <div className="w-100 bg-primary"></div> */}
              <div className="col-12 col-sm-12 col-lg-8 bg-white shadow taskListView d-flex flex-column gap-3 overflow-hidden">
                <div className="d-flex justify-content-between ">
                  <div>
                    <h4>Student Performance</h4>
                    <p className="text-secondary">June 2022</p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div className="dotGraph"></div>
                    <h4 className="m-0 p-0 fs-6">{activeUser[0].name}</h4>
                  </div>
                </div>
                <Chart />
              </div>
              <div className="col-12 col-lg-4  p-0  px-lg-3">
                <div className="taskListView shadow">
                  <h4 className="mb-4">Tasks</h4>
                  <TaskNotifications />
                </div>
              </div>
            </div>
            <div className="row pb-4">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-12 col-sm-6 col-lg-4 mt-4">
                    <UpcomingClasses />
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 mt-4">
                    <UpcomingClasses />
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 mt-4">
                    <UpcomingClasses />
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4"></div> */}

              <div className="col-12 col-lg-4 d-flex align-items-stretch mt-4">
                <QuickMessages />
              </div>
            </div>
          </div>
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
