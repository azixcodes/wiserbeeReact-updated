import React from "react";
import { SidebarLogo } from "../../Constant/images";
import { Link } from "react-router-dom";
import { facebookSvg, instagramSvg, twitterSvg } from "../../Constant/svgs";
const Footer = () => {
  return (
    <div className="container-fluid bg-main py-5 rounded-md mt-2 px-4">
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="footerLogo">
            <img src={SidebarLogo} alt="logo" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="quickLinks d-flex flex-column gap-3 text-white">
            <Link>Web Programming</Link>
            <Link>Mobile Programming</Link>
            <Link>Java Beginner</Link>
            <Link>Php Beginner</Link>
          </div>
        </div>
        <div className="col-md-3">
          <div className="quickLinks d-flex flex-column gap-3 text-white">
            <Link>Adobe Illustrator</Link>
            <Link>Adobe Photoshop</Link>
            <Link>Design Logo</Link>
          </div>
        </div>
        <div className="col-md-3">
          <div className="quickLinks d-flex flex-column gap-3">
            <Link>Writing Course</Link>
            <Link>Photography</Link>
            <Link>Video Making</Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="divider"></div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="copright d-flex justify-content-center">
            <label className="  mt-2 mb-2">
              Copyright &copy; WiserBee 2024 All Rights Reserved
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="socialIcons d-flex flex-row justify-content-end gap-3 mt-2 mb-2">
            <Link>{twitterSvg}</Link>
            <Link>{instagramSvg}</Link>
            <Link>{facebookSvg}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
