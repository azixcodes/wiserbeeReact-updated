import React from "react";
import FlexBtn from "../Components/Common/FlexBtn";
import { importSvg, exportSvg } from "../Constant/svgs";
import { headings, data } from "../Constant/grades";
import GradeTable from "../Components/Common/GradeTable";
const GradeBook = () => {
  return (
    <div className="container-fluid px-2 py-2 shadow-md bg-white rounded">
      <div className="row">
        <div className="col-md-9  ">
          <h4 className="fw-bold heading24px">Gradebook Overview</h4>
        </div>
        <div className="col-md-3 ">
          <div className="w-100  d-flex align-items-center h-100 gap-3  justify-content-end">
            <FlexBtn
              icon={importSvg}
              label="Import"
              color="#463C77"
              bgColor="#EDEBF1"
            />
            <FlexBtn
              icon={exportSvg}
              label="Export"
              color="white"
              bgColor="#241763"
            />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <GradeTable headings={headings} data={data} />
        </div>
      </div>
    </div>
  );
};

export default GradeBook;
