import { attendaceData, attendanceTableHeadings } from "../../Constant/grades";
import ReactDatePicker from "../../Components/Common/ReactDatePicker";
import AttendanceTable from "../../Components/Common/AttendanceTable";
const Attendance = () => {
  return (
    <div className="container-fluid px-2 py-2 shadow-md bg-white rounded">
      <div className="row">
        <div className="col-md-9  ">
          <h4 className="fw-bold heading24px">8th Class Students</h4>
        </div>
        <div className="col-md-3 ">
          <div className="w-100  d-flex align-items-center h-100 gap-3  justify-content-end">
            <h6 className="p-0 m-0">Date</h6>
            {/* <input type="date" className="" form-control /> */}
            <ReactDatePicker placeholder="Select Date" />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <AttendanceTable
            headings={attendanceTableHeadings}
            data={attendaceData}
          />
        </div>
      </div>
    </div>
  );
};

export default Attendance;
