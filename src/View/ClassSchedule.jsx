import React from "react";
import Counter from "../Components/Common/Counter";
import { Check, X } from "lucide-react";
const ClassSchedule = () => {
  return (
    <>
      <main>
        <h2 className="fs-5 ps-2 pt-5 fw-bold">
          Assessment by Parents for Special need Children
        </h2>
        <div class="container pt-4">
          <form action="">
            <div class="row">
              <div class="col-md-3">
                <div class="form-group">
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
              <div class="col-md-3">
                <label for="usr2" className="mb-2">
                  Type
                </label>
                <div class="form-group">
                  <select
                    class=" select-bg form-select"
                    aria-label="Default select example"
                  >
                    <option selected>select type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label for="usr3" className="mb-2">
                    Category
                  </label>
                  <div class="form-group">
                    <select
                      class=" select-bg form-select"
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
              <div class="col-md-3">
                <div class="form-group">
                  <label for="usr4" className="mb-2">
                    Sub Category
                  </label>
                  <div class="form-group">
                    <select
                      class=" select-bg form-select"
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
                  <h2 className="fs-5 fw-bold">Question 1</h2>
                  <div className="w-25 d-flex gap-2">
                    <span className="pt-1 fw-bold">Marks</span> <Counter />
                  </div>
                </div>
                <div className="pt-3">
                  <input
                    type="text select-bg"
                    placeholder="Enter possible question here"
                    class="form-control p-2"
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
                  <h2 className="fs-5 fw-bold">Question 2</h2>
                  <div className="w-25 d-flex gap-2">
                    <span className="pt-1 fw-bold">Marks</span> <Counter />
                  </div>
                </div>
                <div className="pt-3">
                  <input
                    type="text select-bg"
                    placeholder="Enter possible question here"
                    class="form-control p-2"
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
                  <h2 className="fs-5 fw-bold">Question 3</h2>
                  <div className="w-25 d-flex gap-2">
                    <span className="pt-1 fw-bold">Marks</span> <Counter />
                  </div>
                </div>
                <div className="pt-3">
                  <input
                    type="text select-bg"
                    placeholder="Enter possible question here"
                    class="form-control p-2"
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
        </div>
      </main>
    </>
  );
};
export default ClassSchedule;
