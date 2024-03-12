import React, { useState } from "react";
import { books } from "../../Constant/library";
import Modal from "react-modal";
import BookDetails from "../../modals/BookDetails";
import { pageSvg, libraryCardUserSvg, headSetSvg } from "../../Constant/svgs";
const LibraryCards = () => {
  const [open, setOpne] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      border: "none",
    },
  };

  const handleCardClick = () => {
    alert("card clicked");
  };
  return (
    <>
      <Modal
        isOpen={true}
        // onRequestClose={}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <BookDetails />
      </Modal>
      <div className="row">
        {books.map((book, index) => (
          <div
            className=" col-sm-6 col-md-4 cursor-pointer libraryCard"
            key={index}
            onClick={handleCardClick}
          >
            <div className="px-2 py-2 customShadow rounded h-100 d-flex flex-column ">
              <div className="libraryImageWrapper">
                <img src={book.thumbnail} />
              </div>
              <div className="content mt-2 d-flex flex-column">
                <h6 className="fw-bold text-capitalize">{book.title}</h6>
                <div className="d-flex  align-items-center justify-content-between authorSection">
                  <div className="d-flex align-items-center ">
                    <span>{libraryCardUserSvg}</span>
                    <label htmlFor="" className="text-capitalize">
                      {book.author}
                    </label>
                  </div>
                  <div className="d-flex  align-items-center mt-2">
                    {book.duration && (
                      <div className="d-flex align-items-center gap-2">
                        {headSetSvg} <span>{book.duration}Hr</span>
                      </div>
                    )}
                    {book.pages && (
                      <div className="d-flex align-items-center gap-2 text-capitalize">
                        <span>{pageSvg}</span> <span>{book.pages}Pg</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="d-flex  align-items-center justify-content-between mt-2 authorSection">
                  <p className="m-0 p-0">Stars</p>
                  <span className="m-0 p-0">({book.stars}K)</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LibraryCards;
