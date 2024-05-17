import React from "react";

const UserType = ({ itemClick }) => {
  const userTypes = ["Student", "Teacher", "Parent"];
  return (
    <div className="row">
      <div
        className="col-md-12  py-2 px-2 card shadow d-flex flex-column justify-content-between"
        style={{ height: "29rem" }}
      >
        <div className="form-group">
          <label className="mb-2">User Type</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => itemClick(e.target.value)}
          >
            {userTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <form autoComplete="false">
          <div className="form-group mb-2">
            <label htmlFor="email" className="text-secondary">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="email"
              autoComplete="false"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="password" className="text-secondary">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
            />
          </div>
          <div>toggle</div>
        </form>
      </div>
    </div>
  );
};

export default UserType;
