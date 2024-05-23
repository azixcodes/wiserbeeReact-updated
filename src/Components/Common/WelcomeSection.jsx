import React from "react";
import EntrollCourseTiles from "../Home/EntrollCourseTiles";
import ChildCards from "../parent/ChildCards";
import { useTranslation } from "react-i18next";

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
  const {t} = useTranslation();
  console.log("lang", t)
  return (
    <div className="welcomeBox">
      <div className="logoWithText d-flex justify-content-start align-items-start flex-wrap">
        <div className="welcomeTxtP w-100">
          <div className="mt-2">
            <h6>{`${t('welcome')} John!`}</h6>
            <p>{`${t('always')} ${user} ${t('portal')}`}</p>
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
