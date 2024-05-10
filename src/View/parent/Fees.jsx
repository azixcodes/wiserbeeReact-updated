import React from "react";
import { feesHeadings, feesData } from "../../Constant/grades";
import { useParentContext } from "../../ContextAPI/ParentContext";
import FeesTable from "../../Components/parent/FeesTable";
const Fees = () => {
  const { users } = useParentContext();
  const newData = feesData.map((data, index) => ({
    ...data,
    name: users[index].name,
    avatar: users[index].avatar,
  }));

  return (
    <div className="container-fluid shadow px-4 py-3 bg-white rounded">
      <div className="row">
        <div className="col-md-12">
          <h4 className="text-center fw-bold py-4">List of Student Fees</h4>
        </div>
      </div>
      <div className="row mt-3">
        <FeesTable headings={feesHeadings} data={newData} />
      </div>
    </div>
  );
};

export default Fees;
