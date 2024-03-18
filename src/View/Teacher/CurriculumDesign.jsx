import React, { useState } from "react";
import Curriculum from "../../Components/Teacher/Curriculum";
import Modal from "react-modal";
import AddCurriculumModal from "../../modals/AddCurriculumModal";
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
const CurriculumDesign = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal isOpen={open} style={customStyles} onRequestClose={closeModal}>
        <AddCurriculumModal onRequestClose={closeModal} />
      </Modal>
      <div className="container-fluid p-0 m-0">
        <div className="row">
          <div className="col-md-12">
            <div className="curriculumHeader d-flex justify-content-between py-2">
              <h4 className="fw-bold">Curriculum Management</h4>
              <button className="btn btn-primary bg-main" onClick={openModal}>
                Create New
              </button>
            </div>
          </div>
        </div>
        <Curriculum />
      </div>
    </>
  );
};

export default CurriculumDesign;
