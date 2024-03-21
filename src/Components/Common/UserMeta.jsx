import React from "react";
import { attendanceSvg, classSvg, sectionSvg } from "../../Constant/svgs";
import TextChip from "../Common/TextChip";
import IconWrapper from "../Common/IconWrapper";
const UserMeta = () => {
  return (
    <div className="w-100 d-flex flex-column gap-3 userClassMeta px-3">
      {/* class */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2 align-items-center">
          <IconWrapper bg="#E9E8EF">{classSvg}</IconWrapper>
          <div className="d-flex flex-column">
            <h6 className="m-0 p-0 fw-bold">Class</h6>
            <p className="m-0 p-0 text-secondary">Primary</p>
          </div>
        </div>
        <TextChip label="5th Class" bg="#EDE7FF" text="#7F53FE" />
      </div>
      {/* section */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2 align-items-center">
          <IconWrapper bg="#E9E8EF">{sectionSvg}</IconWrapper>
          <div className="d-flex flex-column">
            <h6 className="m-0 p-0 fw-bold">Class</h6>
            <p className="m-0 p-0 text-secondary">Primary</p>
          </div>
        </div>
        <TextChip label="Gold" bg="#52AFA626" text="#30ADA1" />
      </div>
      {/* attendance */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2 align-items-center">
          <IconWrapper bg="#E9E8EF">{attendanceSvg}</IconWrapper>
          <div className="d-flex flex-column">
            <h6 className="m-0 p-0 fw-bold">Attendance</h6>
            <p className="m-0 p-0 text-success">Present</p>
          </div>
        </div>
        <TextChip label="08:00:00" bg="#DFE9F6" text="#3D87DC" />
      </div>
    </div>
  );
};

export default UserMeta;
