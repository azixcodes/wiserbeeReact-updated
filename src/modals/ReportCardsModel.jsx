import React from "react";
import FlexBtn from "../Components/Common/FlexBtn";
import { exportSvg } from "../Constant/svgs";
import { observation } from "../Constant/observation";

const ReportCardsModel = ({ onRequestClose }) => {
  const student = {
    "Student ID": "10001",
    "Student Name": "John Smith",
    Class: "Primary",
    "Course ID": "CS101",
    "Overall Results": "92%",
    "Overall Grade": "A+",
  };
  const subjectsData = [
    {
      subject: "Communication skills",
      firstTerm: "75%",
      midTerm: "75%",
      finalTerm: "75%",
      finalGrade: "B+",
    },
    {
      subject: "Product design",
      firstTerm: "60%",
      midTerm: "60%",
      finalTerm: "60%",
      finalGrade: "A+",
    },
    {
      subject: "Case study trials",
      firstTerm: "70%",
      midTerm: "70%",
      finalTerm: "70%",
      finalGrade: "C+",
    },
    {
      subject: "Custom Essay questions",
      firstTerm: "83%",
      midTerm: "83%",
      finalTerm: "83%",
      finalGrade: "A+",
    },
    {
      subject: "Custom MCQ’s questions",
      firstTerm: "83%",
      midTerm: "83%",
      finalTerm: "83%",
      finalGrade: "A+",
    },
  ];

  return (
    <>
      <h3 className="Report_style">Student Report Card</h3>
      <div className="Salary_card">
        <div className="Salary_Report">
          <div className="Salary_Report">
            {Object.entries(student).map(([key, value]) => (
              <div className="Student_Data" key={key}>
                <p className="Exam_style">{key}</p>
                <span className="font_color studentInfo">{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="Table_Card">
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontFamily: "arial, sans-serif",
            }}
          >
            <thead>
              <tr>
                <th className="Salary_Heading">Subject</th>
                <th className="Salary_Heading">First Term</th>
                <th className="Salary_Heading">Mid Term</th>
                <th className="Salary_Heading">Final Term</th>
                <th className="Salary_Heading">Final Grade</th>
              </tr>
            </thead>
            <tbody>
              {subjectsData.map((data, index) => (
                <tr key={index}>
                  <td className="Salary_Data">{data.subject}</td>
                  <td className="Salary_Data">{data.firstTerm}</td>
                  <td className="Salary_Data">{data.midTerm}</td>
                  <td className="Salary_Data">{data.finalTerm}</td>
                  <td className="Salary_Data">{data.finalGrade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="Table_Card">
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontFamily: "arial, sans-serif",
            }}
          >
            <thead>
              <tr>
                <th className="Salary_Heading">Assesment</th>
                <th className="Salary_Heading">Neurocognitive</th>
                <th className="Salary_Heading">Scholastic</th>
                <th className="Salary_Heading">Behavioral</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="Salary_Data">Scores</td>
                <td className="Salary_Data">75%</td>
                <td className="Salary_Data">75%</td>
                <td className="Salary_Data">85%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="container-fluid m-0 p-0 mt-3">
          <div className="row">
            <div className="col-md-12">
              <div className="teacherObservation w-100">
                <div className="observationHeader px-4">
                  <h6 className=" text-start">Teacher Observation</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="observationWrapper w-100 d-flex flex-column gap-3 py-2 px-2 mt-4">
                {observation.map((ob, index) => (
                  <div
                    className="observation w-100 px-4 d-flex  justify-content-between align-items-center"
                    key={index}
                  >
                    <label className="fw-bold">{ob.title}</label>
                    <div className="observationOptions d-flex flex-column gap-2">
                      <div className="options d-flex gap-2">
                        {ob.options.map((op, i) => (
                          <div className="form-check" key={i}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault1"
                            >
                              {op}
                            </label>
                          </div>
                        ))}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Write your comments here"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="Report_button">
          <button onClick={onRequestClose}>Cancel</button>
          <button>Print Report</button>
        </div> */}
        <div className="d-flex mt-4 h-100 gap-3 justify-content-end">
          <FlexBtn
            label="Cancel"
            color="#463C77"
            bgColor="#EDEBF1"
            handleClick={onRequestClose}
          />
          <FlexBtn
            icon={exportSvg}
            label="Print Report"
            color="white"
            bgColor="#463C77"
            style={{ fontSize: "14px" }}
          />
        </div>
      </div>
    </>
  );
};

export default ReportCardsModel;
