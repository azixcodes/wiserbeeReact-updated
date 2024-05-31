import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { clockSvg, calanderSvg, studentSvg } from "../../Constant/svgs";
import Modal from "react-modal";
import ScheduleClass from "../../modals/ScheduleClass";
import useFetch from "../../hooks/UseFetch";
import UserAvatars from "./UserAvatars";
import { createDateInterval, formatTime } from "../../Constant/date";
import { useTranslation } from "react-i18next";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    border: "none",
    overFlow: "auto",
  },
};
const Classes = ({ title }) => {
  const { data, error, loading } = useFetch("/quiz/class-schedule/");
  const { t,i18n } = useTranslation();
  const isArabic = i18n.language;
  const [examData, setExamData] = useState([]);

  useEffect(() => {
    const newItems = data.map((item, index) => ({
      title: item.subject_title,
      tags: [item.subject_title, "24 Lectures", "Section C"],
      date: createDateInterval(item.start_date, item.end_date),
      students: 30,
      duration: formatTime(item.start_time, item.end_time),
    }));

    setExamData(newItems);
  }, [data]);

  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState({
    loading: false,
    data: [],
    error: null,
  });
  const navigate = useNavigate();
  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        setUsers((prev) => ({
          ...prev,
          loading: true,
        }));
        const res = await fetch("https://reqres.in/api/users");
        const { data } = await res.json();
        setUsers((prev) => ({
          ...prev,
          loading: false,
          data,
        }));
      } catch (err) {
        console.log(err);
        setUsers((prev) => ({
          ...prev,
          loading: false,
          error: "Something went wrong",
        }));
      }
    };
    getUser();
  }, []);
  return (
    <>
      <Modal isOpen={open} onRequestClose={closeModal} style={customStyles}>
        <ScheduleClass onRequestClose={closeModal} />
      </Modal>
      <div className="container-fluid">
        <div className="row p-0 m-0">
          <div className="col-md-12 p-0 m-0">
            <div className={`leassonPlanheader d-flex justify-content-between ${isArabic === "sa" ? 'flex-row-reverse' : ''}`}>
              <h4 className="p-0 m-0 fw-bold ">{title || t("MyClasses")}</h4>
              <div className=" d-flex  justify-content-center justify-content-lg-end">
                <button
                  className={`text-capitalize fs-6 gap-3 d-flex justify-content-between align-items-center btnWithIcon bg-main ${isArabic === "sa" ? 'flex-row-reverse' : ''}`}
                  onClick={() => setOpen(true)}
                >
                  <span className="px-1 py-1   fw-4 rounded p-0 addButtonSty">
                    <Plus />
                  </span>
                  <span>{t('addNew')} </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-capitalize  py-2">
          {error && "Something went wrong..."}
          {loading && "Loading exams..."}
          {examData?.length > 0
            ? examData.map((exam, index) => (
                <div
                  className="col-md-4 cursor-pointer py-2 "
                  key={index}
                  //   onClick={() => handleQuestionNavigate(index)}
                >
                  <div className="d-flex flex-column align-items-between  bg-white examDataWrapper px-2 py-3 borderRadius_15">
                    <div className="d-flex justify-content-between px-2">
                      <h4
                        className="fw-bold p-0 m-0 fs-6 cursor-pointer"
                        onClick={() => navigate("/attendance")}
                      >
                        {exam.title}
                      </h4>
                      {users.loading && "loading..."}
                      {users.error && users.error}
                      <UserAvatars users={users.data} />
                    </div>
                    <div className="d-flex flex-column flex-md-row gap-3 examChipsWrapper mt-3 px-2">
                      {exam.tags.map((tag, index) => (
                        <div className="examChip" key={index}>
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div className="d-flex gap-3 mt-3 align-items-center justify-content-between examSvgsText px-2">
                      <Link
                        to="https://sym.swatitech.com/join/math-lecture-2.2"
                        target="_blank"
                        className="d-flex gap-2 align-items-center"
                      >
                        {calanderSvg}{" "}
                        <span className="p-0 m-0">{exam.date}</span>
                      </Link>
                      <div className="d-flex gap-2 align-items-center">
                        {studentSvg}{" "}
                        <span className="m-0 p-0">
                          {exam.students} Students
                        </span>
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        {clockSvg}
                        <p className="p-0 m-0 ">{exam.duration} Mins</p>
                      </div>
                    </div>
                    {/* last row */}
                  </div>
                </div>
              ))
            : "No classes added yet.."}
        </div>
      </div>
    </>
  );
};

export default Classes;
