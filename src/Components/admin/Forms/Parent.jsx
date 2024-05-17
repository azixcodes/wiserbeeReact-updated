import React from "react";

const Parent = () => {
  return (
    <div className="row px-4 m-0">
      <div className="col-md-12">
        <h4 className="text-center fs-6 fw-bold py-3">
          Parent General Information
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
              Date of Birth
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
        <div className="col-md-6 mt-3">
          <button className="btn btn-primary bg-main">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Parent;
