import React from "react";
import { Dot, PauseIcon, UserRound } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { logoFrame as viserbe } from "../Constant/images";
import { greenPlayBtn,purplePlayBtn,lightPlayBtn,multiUser,reviewUser } from "../Constant/svgs";
import Avatar from "../Components/Common/Avatar";
import { userSvg } from "../Constant/svgs";
import Video from "../assets/videos/node.mp4";
const CourseDetails = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3">
          {/* Video container */}
          <div className="col-md-12  col-lg-8">
            <div className="video">
              <video
                autoPlay={true}
                loop={true}
                controls
                className="rounded-md w-100"
              >
                <source src={Video} />
              </video>
            </div>
            <div className="reviewAboutChannel postion-relative top-4">
              <h1 className="pt-3 fw-bold">Mobile Dev React Native</h1>
              <div className="bottom-part d-flex justify-content-between flex-wrap ">
                <div className=" d-flex flex-wrap gap-2  w-50">
                  <div className="img-viserbe ">
                    <img src={viserbe} className="img-fluid" alt="" />
                  </div>
                  <div className="viserbe-text d-flex flex-column">
                    <span className="viser-helper fw-bold">WiserBee</span>
                    <span className="digital-studio">Design Studio</span>
                  </div>
                </div>
                <div className="icons border-bottom-5 d-flex gap-5 pt-2">
                  <div>
                    {multiUser}
                    &nbsp;
                    <span>2.1k</span>
                  </div>
                  <div>
                    {reviewUser}
                    &nbsp;
                    <span>2.1k</span>
                  </div>
                </div>
              </div>
              <hr className="line w-100" />
              <div className=" container-fluid">
                <div className="row">
                  <div>
                    <div className="content-section">
                      <h2 className="fw-bold">About Course</h2>
                      <p className="">
                        Vue (pronounced /vjuː/, like view) is a progressive
                        framework for building user interfaces. <br />
                        Unlike other monolithic frameworks, Vue is designed from
                        the ground up to be incrementally <br /> adoptable. The
                        core library is focused on the view layer only and is
                        easy to pick up and <br /> integrate with other
                        libraries or existing projects. On the other hand, Vue
                        is also perfectly <br /> capable of powering
                        sophisticated Single-Page Applications when used in
                        combination <br /> with modern tooling and supporting
                        libraries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="line w-100" />
              {/* Review section  */}
              <h3 className="fw-bold p-0 m-0 mb-3">Review</h3>
              <div className="container-fluid">
                <div className="d-flex gap-4">
                  <Avatar>{userSvg}</Avatar>
                  <div>
                    <span className="viser-helper">Leonardo Da Vinci</span>
                    <p className="last-text">Today</p>
                    <p className="first-text">
                      Loved the course. I've learned some very subtle tecniques,
                      expecially on leaves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second container */}
          <div className=" second col-md-12 col-lg-4 rounded-4 pb-5 shadow-sm align-self-start">
            <div className="container">
              <div className="upper pt-4">
                <div className="d-flex justify-content-between">
                  <span className="fs-6 fw-bold">
                    Chapter 1: Course Overview
                  </span>
                  <span className="">
                    <ChevronDown size={25} />
                  </span>
                </div>
                <span className="video-dot">
                  1/12 Videos
                  <Dot />
                </span>
                <span className="video-time">28m</span>
              </div>
            </div>
            <div className="container">
              <div className="upper pt-4">
                <div className="d-flex justify-content-between">
                  <span className="fs-6 fw-bold">Chapter 2: Curriculum</span>
                  <span className="">
                    <ChevronUp />
                  </span>
                </div>
                <span className="video-dot">
                  1/12 Videos
                  <Dot />
                </span>
                <span className="video-time">1h 28m</span>
              </div>
            </div>
            {/* colored section  */}
            <div className=" colored-data container rounded-2">
              <div className="upper mt-4 pt-3 pb-2 border-bottom">
                <div className="d-flex justify-content-between">
                  <span className=" colored-heading fs-6 ">
                    Installing Vue JS
                  </span>
                  <span className="cursor-pointer completed p-1 fs-6 fw-lighter d-flex justify-content-center text-white rounded-1">
                    Completed
                  </span>
                </div>
                {greenPlayBtn}
                <span className="colored-time-2">10m</span>
              </div>
              <div className="upper  pt-3 pb-2 border-bottom">
                <div className="d-flex justify-content-between ">
                  <span className=" colored-heading fs-6">
                    Understand Vue Component
                  </span>
                  <span className="cursor-pointer playing mt-2  p-2   d-flex justify-content-center text-white rounded-1">
                    Playing
                  </span>
                </div>
                {purplePlayBtn}
                <span className="colored-time">59m</span>
              </div>
              <div className="upper  pt-3 pb-2 border-bottom">
                <div className="d-flex justify-content-between ">
                  <span className=" colored-heading fs-6 ">Vue Templating</span>
                </div>
                {lightPlayBtn}
                <span className="icon-time">12m</span>
              </div>
              <div className="upper  pt-3 pb-2 border-bottom">
                <div className="d-flex justify-content-between ">
                  <span className=" colored-heading fs-6 ">Vue Forms</span>
                </div>
                {lightPlayBtn}
                <span className="icon-time">Document</span>
              </div>
              <div className="upper  pt-3 pb-2 border-bottom">
                <div className="d-flex justify-content-between ">
                  <span className=" colored-heading fs-6 ">Vue Styling</span>
                </div>
                {lightPlayBtn}
                <span className="icon-time">57m</span>
              </div>
              <div className="upper  pt-3 pb-2 border-bottom">
                <div className="d-flex justify-content-between ">
                  <span className=" colored-heading fs-6 ">Vue Routing</span>
                </div>
                {lightPlayBtn}
                <span className="icon-time">1h 30m</span>
              </div>
              <div className="upper  pt-3 pb-2">
                <div className="d-flex justify-content-between ">
                  <span className=" colored-heading fs-6 ">Vue Animation</span>
                </div>
                {lightPlayBtn}
                <span className="icon-time">1h 19m</span>
              </div>
            </div>
            <div className="container">
              <div className="upper pt-3">
                <div className="d-flex justify-content-between">
                  <span className="fs-6 fw-bold">Chapter 3: Components</span>
                  <span className="">
                    <ChevronDown size={25} />
                  </span>
                </div>
                <span className="video-dot">
                  1/12 Videos
                  <Dot />
                </span>
                <span className="video-time">1h 28m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom-part  */}

      <div className="btn">
        <button className="button">Load more review</button>
      </div>
    </>
  );
};
export default CourseDetails;
