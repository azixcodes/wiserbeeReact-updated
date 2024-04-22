import React, { useState } from "react";

const ChangePassword = () => {
  const [passwordData, setPassowrdData] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassowrdData({ ...passwordData, [name]: value });
  };
  const handleSave = () => {
    console.log(passwordData);
  };
  return (
    <div className="w-100 py-4 px-4  d-flex flex-column userGenInfoWrapper gap-3">
      <h2 className="heading24px fw-bold text-center">Change Password</h2>
      <div className="row studentProfileHeading">
        <div className="col-md-6">
          <label for="exampleInputEmail1" className="form-label">
            CURRENT PASSWORD
          </label>
          <div class="mb-3">
            <input
              type="password"
              className="input-gender ps-2 rounded"
              placeholder="Enter Password"
              onChange={handleChange}
              value={passwordData.current_password}
              name="current_password"
            />
          </div>
        </div>

        <div className="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <label for="exampleInputEmail1" className="form-label">
                New Password
              </label>
              <div class="mb-3">
                <input
                  type="password"
                  className="input-gender ps-2 rounded"
                  placeholder="Enter Password"
                  onChange={handleChange}
                  value={passwordData.new_password}
                  name="new_password"
                />
              </div>
            </div>
            <div class="col-md-6">
              <label for="exampleInputEmail2" className="form-label">
                Confirm Password
              </label>
              <div class="mb-3">
                <input
                  type="password"
                  className="input-gender ps-2 rounded"
                  placeholder="Re-enter Password"
                  onChange={handleChange}
                  value={passwordData.confirm_password}
                  name="confirm_password"
                />
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-12 text-center   mt-2">
              <button className="btn-update" onClick={handleSave}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
