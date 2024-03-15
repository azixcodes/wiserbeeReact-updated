import React from "react";
import FlexBtn from "../Components/Common/FlexBtn";
import { exportSvg } from "../Constant/svgs";

const ReportCardsModel = ({ onRequestClose }) => {

  const student = {
    'Student ID': '10001',
    'Student Name': 'John Smith',
    'Class': 'Primary',
    'Course ID': 'CS101',
    'Overall Results': '92%',
    'Overall Grade': 'A+'
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
