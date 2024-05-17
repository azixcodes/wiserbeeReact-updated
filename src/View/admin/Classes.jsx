import { useState } from "react";
const Classes = () => {
  const [classFields, setClassFields] = useState([]);

  const handleAddInputs = () => {
    setClassFields([...classFields, { subject: "" }]);
  };

  return (
    <div className="container-fluid card shadow">
      <div className="row ">
        <div className="col-md-12 d-flex justify-content-center py-2 fw-bold fs-6">
          Class Information
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="class">Class</label>
            <input type="text" className="form-control" placeholder="Class" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="class">Class type</label>
            <select className="form-select" aria-label="Default select example">
              <option>Online</option>
              <option>Physical</option>
            </select>
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <div className="form-group">
            <label htmlFor="class">Sections</label>
            <input
              type="text"
              className="form-control"
              placeholder="Sections"
            />
          </div>
        </div>
      </div>
      <div className="row py-3">
        <div className="col-md-12">
          <button className="btn btn-secondary " onClick={handleAddInputs}>
            Add Class
          </button>
        </div>
        <div
          className="col-md-12"
          style={{ height: "400px", overflowY: "auto" }}
        >
          <div className="row mb-4">
            {classFields.map((_, index) => (
              <div className="col-md-6 mb-4 mt-3" key={index}>
                <div className="form-group">
                  <label htmlFor="class">Subject {++index}</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject Name"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
