import React from "react";

const AccountSetting = () => {
  return (
    <div className="container-fluid mt-2 shadow rounded bg-white card px-5">
      <div className="row">
        <div className="col-md-12">
          <h4 className="text-center fw-bold py-4">Parent Profile Info</h4>
        </div>
      </div>
      {/* form */}
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-column pb-5">
            <label htmlFor="firstName" className="  text-uppercase fw-bold">
              first name
            </label>
            <input
              id="firstName"
              name="firstname"
              className="form-control"
              placeholder="Peter"
            />
          </div>

          <div className="d-flex flex-column pb-5">
            <label htmlFor="userName" className="  text-uppercase fw-bold">
              username
            </label>
            <input
              id="userName"
              name="username"
              className="form-control"
              placeholder="peter"
            />
          </div>
          <div className="d-flex flex-column pb-5">
            <label htmlFor="gender" className="  text-uppercase fw-bold">
              gender
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              id="gender"
            >
              <option selected>Female(F)</option>
              <option value="Male">Male</option>
              <option value="Can't Say">Can't Say</option>
            </select>
          </div>
        </div>
        {/* second col */}
        <div className="col-md-6 ">
          <div className="d-flex flex-column pb-5">
            <label htmlFor="lastName" className="  text-uppercase fw-bold">
              last name
            </label>
            <input
              id="lastName"
              name="lastname"
              className="form-control"
              placeholder="Parker"
            />
          </div>
          <div className="d-flex flex-column pb-5">
            <label htmlFor="email" className="  text-uppercase fw-bold">
              email
            </label>
            <input
              id="email"
              name="email"
              className="form-control"
              placeholder="peter@example.com"
            />
          </div>

          <div className="d-flex flex-column pb-5">
            <label htmlFor="location" className="  text-uppercase fw-bold">
              location
            </label>
            <input
              id="location"
              name="location"
              className="form-control"
              placeholder="Rome"
            />
          </div>
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-md-12 justify-content-center d-flex">
          <button className="px-2 px-2 text-white rounded bg-main border-0 btn btn-primary">
            Save Changes
          </button>
        </div>
      </div>
      <div className="row pb-5 px-4">
        <div className="divider"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h4 className="text-center fw-bold py-4">Change Password</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-column pb-5">
            <label
              htmlFor="currentpassword"
              className="  text-uppercase fw-bold"
            >
              current password
            </label>
            <input
              id="currentpassword"
              name="currentpassword"
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-column pb-5">
            <label htmlFor="newpassowrd" className="  text-uppercase fw-bold">
              new password
            </label>
            <input
              id="newpassword"
              name="newpassword"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-column pb-5">
            <label
              htmlFor="confimpassword"
              className="  text-uppercase fw-bold"
            >
              confirm password
            </label>
            <input
              id="confirmpassword"
              name="confirmpassword"
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-md-12 justify-content-center d-flex">
          <button className="px-2 px-2 text-white   rounded bg-main border-0 btn btn-primary">
            Save Changes
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="text-secondary text-center">
            You will be asked to log in again with your new password after you
            save your changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
