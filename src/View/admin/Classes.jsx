import { useState } from "react";
import CustomDropdown from "../../Components/customs/dropdowns/CustomDropdown";
import toast, { Toaster } from "react-hot-toast";
import { postRequest } from "../../services/index";
import { getErrorMessages } from "../../Constant/helpers";
const Classes = () => {
  const [formData, setFormData] = useState({
    standard: "",
    section: [],
    class_type: "Online",
    add_subjects: [],
  });

  const [subjectChips, setSubjectChips] = useState([]);
  const [sectionChips, setSectionChips] = useState([]);
  const removeChip = (chipToRemove, chipType) => {
    if (chipType === "subject")
      setSubjectChips(subjectChips.filter((chip) => chip !== chipToRemove));
    if (chipType === "section")
      setSectionChips(sectionChips.filter((chip) => chip !== chipToRemove));
  };

  const removeLastChip = (chipType) => {
    if (chipType === "subject") setSubjectChips(subjectChips.slice(0, -1));
    if (chipType === "section") setSectionChips(sectionChips.slice(0, -1));
  };
  const addChip = (chip, chipType) => {
    if (chipType === "subject") setSubjectChips([...subjectChips, chip]);
    if (chipType === "section") setSectionChips([...sectionChips, chip]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    const { standard, class_type } = formData;

    const payload = {
      standard,
      section: sectionChips,
      class_type,
      add_subjects: subjectChips,
    };

    try {
      const res = await postRequest("/api/quiz/classes_data/", payload);
      if (res.ok) {
        toast.success("Class added successfully");
        setSectionChips([]);
        setSubjectChips([]);
        setFormData({
          standard: "",
          section: [],
          class_type: "Online",
          add_subjects: [],
        });
      } else {
        const data = await res.json();
        const message = getErrorMessages(data);
        toast.error(message);
      }
    } catch (err) {
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <>
      <Toaster />
      <div className="container-fluid card shadow h-auto">
        <div className="row ">
          <div className="col-md-12 d-flex justify-content-center py-2 fw-bold fs-6">
            Class Information
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="class">Class/Standard</label>
              <input
                type="text"
                className="form-control"
                placeholder="Class"
                name="standard"
                onChange={handleInputChange}
                value={formData.standard}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="class">Class type</label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="class_type"
                onChange={handleInputChange}
                value={formData.class_type}
              >
                <option>Online</option>
                <option>Physical</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="form-group">
              <label htmlFor="class">Sections</label>
              <CustomDropdown
                placeholder="to add sections"
                chips={sectionChips}
                addChip={addChip}
                removeLastChip={removeLastChip}
                setChips={setSectionChips}
                removeChip={removeChip}
                chipType="section"
              />
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="form-group">
              <label htmlFor="class">Subjects</label>
              <CustomDropdown
                placeholder="to add subjects"
                chips={subjectChips}
                addChip={addChip}
                removeLastChip={removeLastChip}
                setChips={setSubjectChips}
                removeChip={removeChip}
                chipType="subject"
              />
            </div>
          </div>
          <div className="col-md-6 mt-3 py-4">
            <div className="form-group mt-4">
              <button
                className="btn bg-main  text-white btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Classes;
