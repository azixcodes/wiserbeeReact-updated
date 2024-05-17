import React, { useState } from "react";

const Teacher = () => {
  const [classFields, setClassFields] = useState([]);

  const handleAddInputs = () => {
    setClassFields([...classFields, { class: "", section: "" }]);
  };
  return (
    <div className="row px-4 m-0">
      <div className="col-md-12">
        <h4 className="text-center fs-6 fw-bold py-3">
          Teacher General Information
        </h4>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="fname" className="text-capitalize">
              first name
            </label>
            <input
              type="text"
              placeholder="Peter"
              className="form-control"
              id="fname"
            />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="form-group">
            <label htmlFor="lname" className="text-capitalize">
              last name
            </label>
            <input
              type="text"
              placeholder="Parker"
              className="form-control"
              id="lname"
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="phone" className="text-capitalize">
              Phone
            </label>
            <input
              type="number"
              placeholder="+92238724842"
              className="form-control"
              id="phone"
            />
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="form-group">
            <label htmlFor="location" className="text-capitalize">
              Phone
            </label>
            <input
              type="text"
              placeholder="Lahore"
              className="form-control"
              id="location"
            />
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="form-group">
            <label htmlFor="" className="text-capitalize">
              Birthday
            </label>
            <div className="row">
              <div className="col-md-4">
                <input
                  type="number"
                  placeholder="09"
                  className="form-control"
                  id=""
                />
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  placeholder="22"
                  className="form-control"
                  id=""
                />
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  placeholder="1975"
                  className="form-control"
                  id=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="location" className="text-capitalize">
              Gender
            </label>
            <select className="form-select" aria-label="Default select example">
              <option>Female(F)</option>
              <option>Male(M)</option>
              <option>Can't say(N)</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="class">Start Date</label>

            <input type="date" className="form-control" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-end">
          <button className="btn btn-secondary " onClick={handleAddInputs}>
            Add Class
          </button>
        </div>
        <div
          className="col-md-12"
          style={{ height: "80px", overflowY: "auto" }}
        >
          {classFields.map((_, index) => (
            <div className="row mb-4" key={index}>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="class">Class</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Class I</option>
                    <option>Class II</option>
                    <option>Class III</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="class">Section</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Section I</option>
                    <option>Section II</option>
                    <option>Section III</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teacher;
