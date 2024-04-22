import React, { useState } from "react";
import { X } from "lucide-react";

const ScheduleClass = ({ onRequestClose, exam }) => {
  const [classData, setClassData] = useState({
    title: "",
    start_date: null,
    end_date: null,
    start_time: null,
    end_time: null,
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setClassData({ ...classData, [name]: value });
  };
  const handleSubmitForm = () => {
    console.log(classData);
  };
  return (
    <div className="container-fluid p-0 m-0 pb-4 modalWrapper">
      <div className="row  d-flex justify-content-center p-0 m-0">
        <div className="col-md-12    examModalWrapper p-0 m-0">
          <div className="d-flex justify-content-between  align-items-center px-4  col-md-12 examModalHeader">
            <h4 style={{ color: "#060317" }} className="fw-bold">
              Schedule Class
            </h4>
            <div
              className="iconWrapper cursor-pointer"
              onClick={onRequestClose}
            >
              <X />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 p-0 m-0 px-4">
        <div className="col-md-12 p-0">
          <div className=" d-flex flex-column gap-2 ">
            <label for="examTitle">Title</label>
            <input
              type="text"
              className="form-control py-1 fs-6 px-2"
              id="examTitle"
              aria-describedby="emailHelp"
              placeholder="Class title"
              name="title"
              value={classData.title}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row  m-0 p-0 mt-3 px-2">
        <div className="col-md-6 ">
          <div className=" d-flex flex-column gap-2">
            <label for="classSelect">Start Date</label>
            <input
              type="date"
              className="form-control"
              name="start_date"
              onChange={handleChange}
              value={classData.start_date}
            />
          </div>
          <div className=" d-flex flex-column gap-2 mt-3">
            <label for="category">Start Time</label>
            <input
              type="time"
              className="form-control"
              value={classData.start_time}
              onChange={handleChange}
              name="start_time"
            />
          </div>
        </div>
        <div className="col-md-6 ">
          <div className=" d-flex flex-column gap-2">
            <label for="sectionSelect">End Date</label>
            <input
              type="date"
              className="form-control"
              onChange={handleChange}
              name="end_date"
              value={classData.end_date}
            />
          </div>
          <div className=" d-flex flex-column gap-2 mt-3">
            <label for="questions">End Time</label>
            <input
              type="time"
              className="form-control"
              name="end_time"
              onChange={handleChange}
              value={classData.end_time}
            />
          </div>
        </div>
      </div>
      <div className="row px-4 py-2 ">
        <div className="col-md-12 d-flex justify-content-center justify-content-md-end">
          <div className="row">
            <div className="col-md-6 mt-2">
              <button
                className="btnFooter"
                style={{ backgroundColor: "#EDEBF1", color: "#463C77" }}
                onClick={onRequestClose}
              >
                Cancel
              </button>
            </div>
            <div className="col-md-6 mt-2">
              <button
                className="btnFooter bgMain"
                style={{ color: "white" }}
                onClick={handleSubmitForm}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleClass;
