import React from "react";
import { feesHeadings, feesData } from "../../Constant/grades";

import FeesTable from "../../Components/parent/FeesTable";
const Fees = () => {
  return (
    <div className="container-fluid shadow px-4 py-3 bg-white rounded">
      <div className="row">
        <div className="col-md-12">
          <h4 className="text-center fw-bold py-4">List of Student Fees</h4>
        </div>
      </div>
      <div className="row mt-3">
        <FeesTable headings={feesHeadings} data={feesData} />
      </div>
    </div>
  );
};

export default Fees;
