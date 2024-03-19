import React, { useState } from "react";
import Counter from "../Components/Common/Counter";
import { Check, X } from "lucide-react";
const AdminPanel = () => {
  const [marks, setmarks] = useState(0);
  const [questions, setQuestion] = useState(0);

  const handleMarksCounter = (_, action) => {
    if (action === "increment") {
      setmarks(marks + 1);
    } else if (action === "decrement")
      setmarks((prev) => {
        return prev > 0 ? prev - 1 : 0;
      });
  };
  return (
    <>
      <h2 className=" ps-2 fw-bold">
        Assessment by Parents for Special need Children
      </h2>
      <form action="" className="pt-4">
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label for="usr1" className="mb-2">
                Assessment Title
              </label>
              <input
                placeholder="Enter Here"
                type="text"
                className=" select-bg form-control "
                id="usr1"
              />
            </div>
          </div>
          <div className="col-md-3">
            <label for="usr2" className="mb-2">
              Type
            </label>
            <div className="form-group">
              <select
                className=" select-bg form-select"
                aria-label="Default select example"
              >
                <option selected>select type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label for="usr3" className="mb-2">
                Category
              </label>
              <div className="form-group">
                <select
                  className=" select-bg form-select"
                  aria-label="Default select example"
                >
                  <option selected>select Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label for="usr4" className="mb-2">
                Sub Category
              </label>
              <div className="form-group">
                <select
                  className=" select-bg form-select"
                  aria-label="Default select example"
                >
                  <option selected>select Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-white mt-4 rounded-4 shadow-lg pb-2">
          <div className="question-one pt-4">
            <div className="heading d-flex justify-content-between">
              <h5 className=" fw-bold">Question 1</h5>
              <div className="w-25 d-flex gap-2">
                <span className="pt-1 fw-bold">Marks</span> <Counter />
              </div>
            </div>
            <div className="pt-3">
              <input
                type="text select-bg"
                placeholder="Enter possible question here"
                className="form-control p-2"
                id="usr"
              />
            </div>
            <div className="border rounded d-flex mt-4 p-1">
              <input
                className="form-control outline-none border-0"
                placeholder="Enter possible option here...."
                type="text"
                name=""
                id=""
              />
              <div className="d-flex gap-3 align-items-center">
                <div
                  className="addQuestionIconWrapper ml-2"
                  style={{ backgroundColor: "#3DC079", color: "white" }}
                >
                  <Check />
                </div>
                <div
                  className="addQuestionIconWrapper"
                  style={{ backgroundColor: "#EA57574D", color: "#EA5757" }}
                >
                  <X />
                </div>
              </div>
            </div>
            <div className="border rounded d-flex mt-4 p-1">
              <input
                className="form-control outline-none border-0"
                placeholder="Enter possible option here...."
                type="text"
                name=""
                id=""
              />
              <div className="d-flex gap-3 align-items-center">
                <div
                  className="addQuestionIconWrapper ml-2"
                  style={{
                    backgroundColor: "#3DC0794D",
                    color: "#3DC079  ",
                  }}
                >
                  <Check />
                </div>
                <div
                  className="addQuestionIconWrapper"
                  style={{ backgroundColor: "#EA5757", color: "white" }}
                >
                  <X />
                </div>
              </div>
            </div>
            <div className="border rounded d-flex mt-4 p-1">
              <input
                className="form-control outline-none border-0"
                placeholder="Enter possible option here...."
                type="text"
                name=""
                id=""
              />
              <div className="d-flex gap-3 align-items-center">
                <div
                  className="addQuestionIconWrapper ml-2"
                  style={{ backgroundColor: "#3DC0794D", color: "#3DC079" }}
                >
                  <Check />
                </div>
                <div
                  className="addQuestionIconWrapper"
                  style={{ backgroundColor: "#EA5757", color: "white" }}
                >
                  <X />
                </div>
              </div>
            </div>
            <div className="border rounded d-flex mt-4 p-1">
              <input
                className="form-control outline-none border-0"
                placeholder="Enter possible option here...."
                type="text"
                name=""
                id=""
              />
              <div className="d-flex gap-3 align-items-center">
                <div
                  className="addQuestionIconWrapper ml-2"
                  style={{
                    backgroundColor: "#3DC0794D",
                    color: "#3DC079  ",
                  }}
                >
                  <Check />
                </div>
                <div
                  className="addQuestionIconWrapper"
                  style={{ backgroundColor: "#EA5757", color: "white" }}
                >
                  <X />
                </div>
              </div>
            </div>
          </div>
          <div className="question-one pt-4">
            <div className="heading d-flex justify-content-between">
              <h5 className=" fw-bold">Question 2</h5>
              <div className="w-25 d-flex gap-2">
                <span className="pt-1 fw-bold">Marks</span> <Counter />
              </div>
            </div>
            <div className="pt-3">
              <input
                type="text select-bg"
                placeholder="Enter possible question here"
                className="form-control p-2"
                id="usr"
              />
            </div>
            <div className="border rounded d-flex mt-4 p-1">
              <input
                className="form-control outline-none border-0"
                placeholder="Enter possible option here...."
                type="text"
                name=""
                id=""
              />
              <div className="d-flex gap-3 align-items-center">
                <div
                  className="addQuestionIconWrapper ml-2"
                  style={{ backgroundColor: "#3DC079", color: "white" }}
                >
                  <Check />
                </div>
                <div
                  className="addQuestionIconWrapper"
                  style={{ backgroundColor: "#EA57574D", color: "#EA5757" }}
                >
                  <X />
                </div>
              </div>
            </div>
            <div className="border rounded d-flex mt-4 p-1">
              <input
                className="form-control outline-none border-0"
                placeholder="Enter possible option here...."
                type="text"
                name=""
                id=""
              />
              <div className="d-flex gap-3 align-items-center">
                <div
                  className="addQuestionIconWrapper ml-2"
                  style={{
                    backgroundColor: "#3DC0794D",
                    color: "#3DC079  ",
                  }}
                >
                  <Check />
                </div>
                <div
                  className="addQuestionIconWrapper"
                  style={{ backgroundColor: "#EA5757", color: "white" }}
                >
                  <X />
                </div>
              </div>
            </div>
            <div className="border rounded d-flex mt-4 p-1">
              <input
                className="form-control outline-none border-0"
                placeholder="Enter possible option here...."
                type="text"
                name=""
                id=""
              />
              <div className="d-flex gap-3 align-items-center">
                <div
                  className="addQuestionIconWrapper ml-2"
                  style={{
                    backgroundColor: "#3DC0794D",
                    color: "#3DC079  ",
                  }}
                >
                  <Check />
                </div>
                <div
                  className="addQuestionIconWrapper"
                  style={{ backgroundColor: "#EA5757", color: "white" }}
                >
                  <X />
                </div>
              </div>
            </div>
            <div className="border rounded d-flex mt-4 p-1">
              <input
                className="form-control outline-none border-0"
                placeholder="Enter possible option here...."
                type="text"
                name=""
                id=""
              />
              <div className="d-flex gap-3 align-items-center">
                <div
                  className="addQuestionIconWrapper ml-2"
                  style={{
                    backgroundColor: "#3DC0794D",
                    color: "#3DC079  ",
                  }}
                >
                  <Check />
                </div>
                <div
                  className="addQuestionIconWrapper"
                  style={{ backgroundColor: "#EA5757", color: "white" }}
                >
                  <X />
                </div>
              </div>
            </div>
          </div>
          <div className="question-one pt-4">
            <div className="heading d-flex justify-content-between">
              <h5 className=" fw-bold">Question 3</h5>
              <div className="w-25 d-flex gap-2">
                <span className="pt-1 fw-bold">Marks</span> <Counter />
              </div>
            </div>
            <div className="pt-3">
              <input
                type="text select-bg"
                placeholder="Enter possible question here"
                className="form-control p-2"
                id="usr"
              />
            </div>
            <div className="border rounded d-flex mt-4 p-1">
              <input
                className="form-control outline-none border-0"
                placeholder="Enter possible option here...."
                type="text"
                name=""
                id=""
              />
              <div className="d-flex gap-3 align-items-center">
                <div
                  className="addQuestionIconWrapper ml-2"
                  style={{ backgroundColor: "#3DC079", color: "white" }}
                >
                  <Check />
                </div>
                <div
                  className="addQuestionIconWrapper"
                  style={{ backgroundColor: "#EA57574D", color: "#EA5757" }}
                >
                  <X />
                </div>
              </div>
            </div>
            <div className="border rounded d-flex mt-4 p-1">
              <input
                className="form-control outline-none border-0"
                placeholder="Enter possible option here...."
                type="text"
                name=""
                id=""
              />
              <div className="d-flex gap-3 align-items-center">
                <div
                  className="addQuestionIconWrapper ml-2"
                  style={{
                    backgroundColor: "#3DC0794D",
                    color: "#3DC079  ",
                  }}
                >
                  <Check />
                </div>
                <div
                  className="addQuestionIconWrapper"
                  style={{ backgroundColor: "#EA5757", color: "white" }}
                >
                  <X />
                </div>
              </div>
            </div>
            <div className="border rounded d-flex mt-4 p-1">
              <input
                className="form-control outline-none border-0"
                placeholder="Enter possible option here...."
                type="text"
                name=""
                id=""
              />
              <div className="d-flex gap-3 align-items-center">
                <div
                  className="addQuestionIconWrapper ml-2"
                  style={{
                    backgroundColor: "#3DC0794D",
                    color: "#3DC079  ",
                  }}
                >
                  <Check />
                </div>
                <div
                  className="addQuestionIconWrapper"
                  style={{ backgroundColor: "#EA5757", color: "white" }}
                >
                  <X />
                </div>
              </div>
            </div>
            <div className="border rounded d-flex mt-4 p-1">
              <input
                className="form-control outline-none border-0"
                placeholder="Enter possible option here...."
                type="text"
                name=""
                id=""
              />
              <div className="d-flex gap-3 align-items-center">
                <div
                  className="addQuestionIconWrapper ml-2"
                  style={{
                    backgroundColor: "#3DC0794D",
                    color: "#3DC079  ",
                  }}
                >
                  <Check />
                </div>
                <div
                  className="addQuestionIconWrapper"
                  style={{ backgroundColor: "#EA5757", color: "white" }}
                >
                  <X />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default AdminPanel;
