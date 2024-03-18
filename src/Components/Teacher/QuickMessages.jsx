import React from "react";
import TextChip from "../Common/TextChip";
import { Clock } from "lucide-react";
const QuickMessages = () => {
  return (
    <>
      <div className="bg-white  rounded-4 shadow">
        <h4 className="fw-bold p-3">Inbox</h4>
        <div className=" msg d-flex ps-3 pe-2 pt-3">
          <div className="inbox-image ">
            <img
              className="img-inbox"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>

          <div>
            <div className="content d-flex gap-2 ms-2">
              <span className="inbox-text">Jennifer Markus</span>
              <span className="">
                {" "}
                <TextChip label="Parent" bg="#EDE7FF" text="#7F53FE" />
              </span>
            </div>
            <p className="inbox-para ps-2">
              Hey! Did you finish the Hi-FI wireframes for flora app design?
              <div className="d-flex justify-content-end pt-2 ">
                <span className=" inbox-time">
                  <Clock size={12} /> 30 Mints ago
                </span>
              </div>
            </p>
          </div>
        </div>
        <hr className="p-0 m-0" />

        <div className=" msg d-flex ps-3 pe-2 pt-3">
          <div className="inbox-image ">
            <img
              className="img-inbox"
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>

          <div>
            <div className="content d-flex gap-2 ms-2">
              <span className="inbox-text">Jennifer aligan</span>
              <span className="">
                {" "}
                <TextChip label="Instructor" bg="#3DC0791F" text="#44AB96" />
              </span>
            </div>
            <p className="inbox-para ps-2 ">
              Hey! Did you finish the Hi-FI wireframes for flora app design?
              <div className="d-flex justify-content-end pt-2">
                <span className=" inbox-time">
                  <Clock size={12} /> 30 Mints ago
                </span>
              </div>
            </p>
          </div>
        </div>
        {/* <hr className="p-0 m-0" />
        <div className=" msg d-flex ps-3 pe-2 pt-3">
          <div className="inbox-image ">
            <img
              className="img-inbox"
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>

          <div>
            <div className="content d-flex gap-2 ms-2">
              <span className="inbox-text">Jennifer Markus</span>
              <span className="">
                {" "}
                <TextChip label="Student" bg="#DE6D2E1F" text="#DE6D2E" />
              </span>
            </div>
            <p className="inbox-para ps-2">
              Hey! Did you finish the Hi-FI wireframes for flora app design?
              <div className="d-flex justify-content-end pt-2">
                <span className=" inbox-time">
                  <Clock size={12} /> 30 Mints ago
                </span>
              </div>
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default QuickMessages;
