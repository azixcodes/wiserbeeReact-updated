import React from "react";
import EntrollCourseTiles from "../Home/EntrollCourseTiles";
import ChildCards from "../parent/ChildCards";
const WelcomeSection = ({ user }) => {
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
  return (
    <div className="welcomeBox">
      <div className="logoWithText d-flex justify-content-start align-items-start flex-wrap">
        <div className="welcomeTxtP w-100">
          <div className="mt-2">
            <h6>Welcome back, John!</h6>
            <p>Always stay updated in your {user} portal</p>
          </div>
          {user === "parent" && <ChildCards />}
          {user === "teacher" && (
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
          )}
          {user === "student" && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
