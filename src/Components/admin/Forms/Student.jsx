import React from "react";

const Student = () => {
  return (
    <div className="row px-4 m-0">
      <div className="col-md-12">
        <h4 className="text-center fs-6 fw-bold py-3">
          Student General Information
        </h4>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="form-group">
            <label htmlFor="fname" className="text-capitalize">
              full name
            </label>
            <input
              type="text"
              placeholder="Peter Parker"
              className="form-control"
              id="fname"
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
              Location
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
              Date of birth
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
        <div className="col-md-6 mb-3">
          <div className="form-group">
            <label htmlFor="location" className="text-capitalize">
              Class
            </label>
            <select className="form-select" aria-label="Default select example">
              <option>Class I</option>
              <option>Class II</option>
              <option>Clcass III</option>
            </select>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="form-group">
            <label htmlFor="location" className="text-capitalize">
              Section
            </label>
            <select className="form-select" aria-label="Default select example">
              <option>Section I</option>
              <option>Section II</option>
              <option>Section III</option>
            </select>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="form-group">
            <label htmlFor="" className="text-capitalize">
              Admission date
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
        <div className="col-md-6 mb-3">
          <div className="form-group">
            <label htmlFor="location" className="text-capitalize">
              parent
            </label>
            <select className="form-select" aria-label="Default select example">
              <option>Parent I</option>
              <option>Parent II</option>
              <option>Parent III</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mt-4">
            <button className="btn btn-primary bg-main">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
