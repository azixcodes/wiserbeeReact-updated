import React from "react";
import EntrollCourseTiles from "../Home/EntrollCourseTiles";
import ChildCards from "../parent/ChildCards";
import { useTranslation } from "react-i18next";
import { formatNumber } from "../../Constant/numberFormatter"; // Correct import path
import { use } from "i18next";

const WelcomeSection = () => {
  const auth = JSON.parse(localStorage.getItem("user"));

  const user = auth.user;
  const { t,i18n } = useTranslation();
  console.log("users",user);
  const EntrollCourseValue = [
    {
      id: "1",
      heading: t("MyCourses"),
      price: "4",
    },
    {
      id: "2",
      heading: t("MyClasses"),
      price: "8",
    },
    {
      id: "3",
      heading: t("MyTask"),
      price: "10",
    },
  ];
  const isArabic = i18n.language;
  // alert("jjj")
  return (
    <div className="welcomeBox">
      <div className="logoWithText d-flex justify-content-start align-items-start flex-wrap">
        <div className="welcomeTxtP w-100">
          <div className={`mt-2 ${isArabic==='sa' ? 'text-end' : ''}`}>
            <h6>{`${t('welcome')} John!`}</h6>
            <p>{user === "student" ? t('alwaysStudent') : user === "teacher" ? t('alwaysTeacher')  : user === "parent" ? t('alwaysParent') : t('alwaysAdmin')}</p>
          </div>
          {user === "parent" && <ChildCards />}
          {user === "teacher" && (
            <div className={`welcomeTilles d-flex ${isArabic==="sa" ? "justify-content-end" : "justify-content-start"} mt-5 flex-wrap`}>
              {EntrollCourseValue.map((item, index) => (
                <EntrollCourseTiles
                  key={index}
                  id={index}
                  heading={item.heading}
                  price={isArabic === 'sa' ? formatNumber(item.price) : item.price}
                  isArabic={isArabic}
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
                  price={isArabic === 'sa' ? formatNumber(item.price) : item.price}
                  isArabic={isArabic}
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
