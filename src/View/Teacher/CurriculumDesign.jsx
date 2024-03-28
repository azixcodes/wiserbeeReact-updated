import React, { useState } from "react";
import CurriculumNav from "../../Components/Common/CurriculumNav";
import {
  OurVision,
  Mission,
  SEN,
  Support,
  CurriculumCycle,
  TeacherLearning,
  LearnerProfile,
} from "../../Components/Curriculum/index";
const CurriculumDesign = () => {
  const [layout, setLayout] = useState("Our Vision");

  const layouts = {
    "Our Vision": <OurVision />,
    "Mission Statement": <Mission />,
    "Learner Profile": <LearnerProfile />,
    "Curriculum Cycle": <CurriculumCycle />,
    "SEN Handbook": <SEN />,
    "Support Program": <Support />,
    "Teacher Learning Program": <TeacherLearning />,
  };

  const swtichLayout = (layout) => {
    setLayout(layout);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 mb-3 md-mb-0">
          <CurriculumNav swtichLayout={swtichLayout} layout={layout} />
        </div>
        <div className="col-md-8">
          <div className="curriculumContentWrapper w-100 bg-white d-flex flex-column py-4 px-3 borderRadius_15 gap-4 ">
            <div className="curriculumHeader d-flex justify-content-between align-items-center">
              <h6 className="fw-bold p-0 m-0">{layout}</h6>
              <button className="btn-update">Full Screen</button>
            </div>
            <div className="">{layouts[layout]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumDesign;
