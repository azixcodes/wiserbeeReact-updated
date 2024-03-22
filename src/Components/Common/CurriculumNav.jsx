import React from "react";

const CurriculumNav = ({ swtichLayout }) => {
  const navItems = [
    "Our Vision",
    "Mission Statement",
    "Learner Profile",
    "Curriculum Cycle",
    "SEN Handbook",
    "Support Program",
    "Teacher Learning Program",
  ];
  return (
    <div className="w-100 bg-white borderRadius_15 px-2 py-3 curriculumNavWrapper">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="px-2 py-2 curriculumNavItems"
          onClick={() => swtichLayout(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default CurriculumNav;
