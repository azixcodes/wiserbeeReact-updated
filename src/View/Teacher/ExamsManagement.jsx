import React, { useState } from "react";
import { examsData } from "../../Constant/exams";
import { useNavigate } from "react-router-dom";
import { CalendarCheck2, CalendarClock, Plus } from "lucide-react";
import { bulbSvg, clockSvg } from "../../Constant/svgs";

import Modal from "react-modal";
import AddExamModal from "../../modals/AddExamModal";
import ScheduleExam from "../../modals/ScheduleExam";
import AddQuestions from "../../modals/AddQuestions";
const ExamsManagement = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [scheduleExamOpen, setScheduleExamOpen] = useState(false);
  const [questionsOpen, setQuestionsOpen] = useState(false);

  const [examDetails, setExamDetails] = useState(null);

  const handleAddNewExamClick = () => {
    setIsOpen(true);
  };

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
    },
  };

  function closeModal() {
    setIsOpen(false);
    setScheduleExamOpen(false);
    setQuestionsOpen(false);
  }
  const handleClickScheduleExam = (exam) => {
    setExamDetails(exam);
    setScheduleExamOpen(true);
    setQuestionsOpen(false);
  };
  const handleClickQuestions = () => {
    setQuestionsOpen(true);
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <AddExamModal onRequestClose={closeModal} />
      </Modal>
      <Modal
        isOpen={scheduleExamOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ScheduleExam onRequestClose={closeModal} />
      </Modal>

      <Modal
        isOpen={questionsOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <AddQuestions onRequestClose={closeModal} />
      </Modal>
      <div className="container-fluid bg-white rounded px-2 py-2">
        <div className="row d-flex align-items-center">
          <div className="col-md-12">
            <div className="d-flex justify-content-between">
              <h4 className="h1 fw-bold heading24px">My Exams</h4>
              <button
                className="text-capitalize fs-6 gap-3 d-flex justify-content-between align-items-center bgMain"
                style={{
                  padding: "4px 8px",
                  borderRadius: "8px",
                  color: "white",
                  width: "auto",
                  whiteSpace: "nowrap",
                  border: "none",
                }}
                onClick={handleAddNewExamClick}
              >
                <span className="px-1 py-1 flex align-items-center justify-content-center  fw-4 rounded p-0 addButtonSty">
                  <Plus />
                </span>
                <span>new exam</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row text-capitalize mt-3">
          {examsData.map((exam, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="d-flex flex-column align-items-between examDataWrapper px-2 py-3">
                <h4 className="fw-bold p-0 m-0 fs-6 cursor-pointer">
                  {exam.title}
                </h4>
                <div className="d-flex flex-column flex-md-row gap-3 examChipsWrapper mt-3">
                  {exam.tags.map((tag, index) => (
                    <div className="examChip" key={index}>
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="d-flex gap-3 mt-3 align-items-center examSvgsText">
                  <div className="d-flex gap-1 align-items-center">
                    {clockSvg} <span>{exam.time}</span>
                  </div>
                  <div
                    className="d-flex gap-1 align-items-center cursor-pointer"
                    onClick={handleClickQuestions}
                  >
                    {bulbSvg} <span>{exam.questions}</span>
                  </div>
                </div>
                <div className="d-flex mt-3">
                  {exam.schdeduled ? (
                    <div className="d-flex   align-items-center gap-2 fs-6 ">
                      <button
                        className="text-capitalize fs-6 d-flex gap-2  align-items-center"
                        style={{
                          backgroundColor: "#EDEBF1",
                          padding: "4px 4px",
                          borderRadius: "8px",
                          color: "#463C77",
                          width: "auto",
                          border: "none",
                        }}
                      >
                        <CalendarCheck2
                          style={{ height: "16px", width: "16px" }}
                        />

                        <span className="p-0 m-0" style={{ fontSize: "12px" }}>
                          Scheduled
                        </span>
                      </button>
                      <span
                        className="p-0 m-0  "
                        style={{ color: "#857EA5", fontSize: "10px" }}
                      >
                        {exam.scheduledData}
                      </span>
                    </div>
                  ) : (
                    <div className="d-flex   align-items-center fs-6 ">
                      <button
                        className="text-capitalize fs-6 d-flex gap-2 align-items-center bgMain"
                        style={{
                          padding: "4px 4px",
                          borderRadius: "8px",
                          color: "white",
                          width: "auto",
                          fontSize: "12px",
                          border: "none",
                        }}
                        onClick={() => handleClickScheduleExam(exam)}
                      >
                        <span className="rounded p-0 m-0">
                          <CalendarClock
                            style={{ height: "16px", width: "16px" }}
                          />
                        </span>
                        <span style={{ fontSize: "11px" }} className="p-0 m-0">
                          Schedule Exam
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExamsManagement;
