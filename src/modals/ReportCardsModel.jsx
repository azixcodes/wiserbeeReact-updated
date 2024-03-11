import React from "react";
import FlexBtn from "../Components/Common/FlexBtn";
import { exportSvg } from "../Constant/svgs";
const ReportCardsModel = ({ onRequestClose }) => {
  return (
    <>
      <h3 className="Report_style">Student Report Card</h3>
      <div className="Salary_card">
        <div className="Salary_Report">
          <div className="Student_Data">
            <p className="Exam_style">Student ID</p>
            <span className="font_color">10001</span>
          </div>
          <div className="Student_Data">
            <p className="Exam_style">Student Name</p>
            <span className="font_color">John Smith</span>
          </div>
          <div className="Student_Data">
            <p className="Exam_style">Class</p>
            <span className="font_color">Primary</span>
          </div>
          <div className="Student_Data">
            <p className="Exam_style">Course ID</p>
            <span className="font_color">CS101</span>
          </div>
          <div className="Student_Data">
            <p className="Exam_style">Overall Results</p>
            <span className="font_color">92%</span>
          </div>
          <div className="Student_Data">
            <p className="Exam_style">Overall Grade</p>
            <span className="font_color">A+</span>
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
              <tr>
                <td className="Salary_Data">Communication skills</td>
                <td className="Salary_Data">75%</td>
                <td className="Salary_Data">75%</td>
                <td className="Salary_Data">75%</td>
                <td className="Salary_Data">B+</td>
              </tr>
              <tr>
                <td className="Salary_Data">Product design</td>
                <td className="Salary_Data">60%</td>
                <td className="Salary_Data">60%</td>
                <td className="Salary_Data">60%</td>
                <td className="Salary_Data">A+</td>
              </tr>
              <tr>
                <td className="Salary_Data">Case study trials</td>
                <td className="Salary_Data">70%</td>
                <td className="Salary_Data">70%</td>
                <td className="Salary_Data">70%</td>
                <td className="Salary_Data">C+</td>
              </tr>
              <tr>
                <td className="Salary_Data">Custom Essay questions</td>
                <td className="Salary_Data">83%</td>
                <td className="Salary_Data">83%</td>
                <td className="Salary_Data">83%</td>
                <td className="Salary_Data">A+</td>
              </tr>
              <tr>
                <td className="Salary_Data">Custom MCQ’s questions</td>
                <td className="Salary_Data">83%</td>
                <td className="Salary_Data">83%</td>
                <td className="Salary_Data">83%</td>
                <td className="Salary_Data">A+</td>
              </tr>
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
