import React from "react";
import FlexBtn from "../../Components/Common/FlexBtn";

import { X } from "lucide-react";
import IconWrapper from "../../Components/Common/IconWrapper";

const AddClass = ({ onRequestClose }) => {
  const subjects = [
    // Common subjects for class 9 and 10
    "Mathematics",

    "English",
    "Urdu",
    "Pakistan Studies",
    "Islamic Studies",

    "Computer Science",
    "Physics",
    "Chemistry",
    "Biology",
    // Add more subjects as needed
  ];
  return (
    <>
      {/* <h3 className="Report_style">Add New Curriculum</h3> */}
      <div className="d-flex py-1 align-items-center Report_style px-4 justify-content-between">
        <h3 className="Report_style">Add New Class</h3>
        <IconWrapper bg="#463c77" color="white" handleClick={onRequestClose}>
          <X />
        </IconWrapper>
      </div>

      <div className="row modalWrapper py-4">
        <div className="col-md-12 px-4">
          <div class="mb-3">
            <label for="title" className="form-label">
              Class Name
            </label>
            <input
              type="email"
              className="form-control"
              id="title"
              placeholder="Enter Title"
            />
          </div>
        </div>
        <div className="col-md-12 px-4 ">
          <div class="">
            <label for="desc" class="form-label">
              Description
            </label>
            <textarea
              class="form-control"
              id="desc"
              rows="3"
              placeholder="Enter Description"
            ></textarea>
          </div>
        </div>

        <div className="col-md-6 px-4 mt-3">
          <div class="mb-3 p-0">
            <label for="price" className="form-label">
              Section
            </label>
            <select class="form-select" aria-label="Default select example">
              <option value="1">All Sections</option>
              <option value="1">Section A</option>
              <option value="2">Section B</option>
              <option value="3">Section C</option>
              <option value="3">Section D</option>
            </select>
          </div>
        </div>
        <div className="col-md-6 px-4 mt-3">
          <div class="mb-3">
            <label for="class" className="form-label">
              Subject
            </label>
            <select class="form-select" aria-label="Default select example">
              {subjects.map((sub, index) => (
                <option value={sub} key={index}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-md-6 px-4 ">
          <div class="">
            <label for="desc" class="form-label">
              Location
            </label>
            <select class="form-select" aria-label="Default select example">
              <option value="1">Online</option>
              <option value="1">Physical</option>
            </select>
          </div>
        </div>

        <div className="col-md-12   px-4 mt-3">
          <div className="d-flex   gap-3 justify-content-end">
            <FlexBtn
              label="Cancel"
              color="#463C77"
              bgColor="#EDEBF1"
              handleClick={onRequestClose}
            />
            <FlexBtn
              // icon={exportSvg}
              label="Create"
              color="white"
              bgColor="#463C77"
              style={{ fontSize: "14px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClass;
