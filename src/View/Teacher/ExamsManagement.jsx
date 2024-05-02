import React, { useState } from "react";

import { Plus } from "lucide-react";

import useFetch from "../../hooks/UseFetch";
import Modal from "react-modal";
import AddExamModal from "../../modals/AddExamModal";
import ScheduleExam from "../../modals/ScheduleExam";
import AddQuestions from "../../modals/AddQuestions";

import ExamCards from "../../Components/Teacher/ExamCards";
const ExamsManagement = () => {
  const {
    data: examData,
    loading,
    error,
    refetch,
  } = useFetch("/quiz/exam-quizes/");

  const [modalIsOpen, setIsOpen] = useState(false);
  const [scheduleExamOpen, setScheduleExamOpen] = useState(false);
  const [questionsOpen, setQuestionsOpen] = useState(false);

  const handleAddNewExamClick = () => {
    setIsOpen(true);
  };
  const [examId, setExamId] = useState(null);
  const handleClickScheduleExam = (exam) => {
    setExamId(exam);
    setScheduleExamOpen(true);
    setQuestionsOpen(false);
  };
  const handleClickQuestions = () => {
    setQuestionsOpen(true);
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

  async function closeModal() {
    setIsOpen(false);
    setScheduleExamOpen(false);
    setQuestionsOpen(false);
    await refetch();
  }

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
        <ScheduleExam onRequestClose={closeModal} examId={examId} />
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
          {/* {examsData.map((exam, index) => (
            <ExamCards exam={exam} key={index} />
          ))} */}
          {loading && <h2>Loading Exams...</h2>}
          {error && <h4>Error </h4>}
          {examData &&
            examData.map((exam, index) => (
              <ExamCards
                exam={exam}
                key={index}
                handleClickScheduleExam={handleClickScheduleExam}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ExamsManagement;
