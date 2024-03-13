import React from "react";
import { headSetSvg, libraryCardUserSvg, pageSvg } from "../Constant/svgs";

const BookDetails = ({ onRequestClose, book }) => {
  return (
    <div className="container p-0 py-3">
      <div className="row">
        <div className="col-12">
          <div className="bookDetailsModalHeader d-flex justify-content-center py-3 align-items-center">
            <h5 className="fg-main fw-bold fs-6 p-0 m-0">Book Details</h5>
          </div>
        </div>
      </div>
      <div className="row px-5 py-3">
        <div className="col-md-3">
          <div className="libraryImageWrapper">
            <img src={book.thumbnail} alt="book " />
          </div>
        </div>
        <div className="col-md-9">
          <div className="bookDetails w-100 d-flex flex-column gap-2">
            <h5 className="  fw-bold fs-5 text-capitalize">{book.title}</h5>
            <div className="d-flex  align-items-center gap-4">
              <div className="d-flex align-items-center ">
                <span>{libraryCardUserSvg}</span>
                <label htmlFor="" className="text-capitalize   p-0 m-0">
                  {book.author}
                </label>
              </div>
              <div className="d-flex  align-items-center ">
                {book.duration && (
                  <div className="d-flex align-items-center gap-2">
                    {headSetSvg}
                    <label htmlFor="" className="text-capitalize p-0 m-0">
                      {book.duration} Hours
                    </label>
                  </div>
                )}
                {book.pages && (
                  <div className="d-flex align-items-center gap-2 text-capitalize">
                    {pageSvg}
                    <label htmlFor="" className="text-capitalize   p-0 m-0">
                      {book.pages} Pages
                    </label>
                  </div>
                )}
              </div>
            </div>
            <div className="d-flex align-items-center gap-4">
              <div
                className="Stars"
                style={{ "--rating": book.stars }}
                aria-label="Rating of this product is 2.3 out of 5."
              ></div>
              <label>({book.ratings}K)</label>
            </div>
            <p className="bookModelDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              quos ab. Nobis sapiente laboriosam libero? Et aspernatur minima
              eos facere quibusdam doloremque veniam deserunt consequatur
              maxime, aliquid odit amet obcaecati?
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="bookDetailsFooter d-flex justify-content-end px-3 gap-3 pb-2">
            <button className="btnCancel" onClick={onRequestClose}>
              Cancel
            </button>
            <button className="btnDownload">Download PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
