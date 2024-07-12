import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { postRequest } from "../../services/index";
import { getErrorMessages } from "../../Constant/helpers";
import CustomDropdown from "../../Components/customs/dropdowns/CustomDropdown";
import { CalendarClock } from "lucide-react";

const Classes = () => {
  const [formData, setFormData] = useState({
    standard: "",
    start_date: "",
    end_date: "",
    section: [],
    class_type: "Online",
    add_subjects: [],
  });

  const [mainInputs, setMainInputs] = useState([]);
  const [subjectChips, setSubjectChips] = useState([]);
  const [sectionChips, setSectionChips] = useState([]);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

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
    const { standard, class_type, start_date, end_date } = formData;

    const formattedSubjects = mainInputs.map((input) => ({
      name: input.subject,
      days: input.days.map((day, index) => ({
        day: day.day,
        start_time: day.start_time,
        end_time: day.end_time,
      })),
    }));

    const payload = {
      standard,
      start_date,end_date,
      section: sectionChips,
      class_type,
      add_subjects: formattedSubjects,
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

  const handleAddInputs = () => {
    const newInputs = {
      subject: "",
      days: [{ day: "", start_time: "", end_time: "" }],
    };
    setMainInputs([...mainInputs, newInputs]);
  };

  const addMoreDays = (index) => {
    const newDays = { day: "", start_time: "", end_time: "" };
    const newItems = [...mainInputs];
    newItems[index].days.push(newDays);
    setMainInputs(newItems);
  };

  const handleChangeMainInputs = (value, name, index, dayIndex = null) => {
    const oldInputs = [...mainInputs];
    if (dayIndex === null) {
      oldInputs[index][name] = value;
    } else {
      oldInputs[index].days[dayIndex][name] = value;
    }
    setMainInputs(oldInputs);
  };

  const handleRemoveSubject = (index) => {
    const newSubjects = [...mainInputs];
    newSubjects.splice(index, 1);
    setMainInputs(newSubjects);
  };

  const handleRemoveDay = (subjectIndex, dayIndex) => {
    const newSubjects = [...mainInputs];
    newSubjects[subjectIndex].days.splice(dayIndex, 1);
    setMainInputs(newSubjects);
  };

  return (
    <>
      <Toaster />
      <div className="container-fluid card shadow h-auto">
        <div className="row">
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
          <div className="col-md-6 mt-3">
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
          <div className="col-md-6 mt-3">
            <div className="form-group">
              <label htmlFor="" className="text-capitalize">
                Start Session
              </label>
              <input
                type="date"
                name="start_date"
                className="form-control"
                onChange={handleInputChange}
                value={formData.start_date}
              />
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="form-group">
              <label htmlFor="" className="text-capitalize">
                End Session
              </label>
              <input
                type="date"
                name="end_date"
                className="form-control"
                value={formData.end_date}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="form-group mt-4">
              <div className="d-flex justify-content-between">
                <label>Add subject per week</label>
                <button
                  htmlFor="class"
                  className="btn btn-secondary mb-3"
                  onClick={handleAddInputs}
                >
                  Add Subjects
                </button>
              </div>
              <div className="d-flex flex-column gap-2">
                {mainInputs.map((inputs, index) => (
                  <div key={index}>
                    <div className="d-flex align-items-center gap-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="subject name"
                        name="subject"
                        value={inputs.subject}
                        onChange={(e) =>
                          handleChangeMainInputs(
                            e.target.value,
                            e.target.name,
                            index
                          )
                        }
                      />
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemoveSubject(index)}
                      >
                        &#x2715;
                      </button>
                      <CalendarClock
                        height={40}
                        width={40}
                        onClick={() => addMoreDays(index)}
                        className="cursor-pointer"
                      />
                    </div>
                    {inputs.days.map((day, dayIndex) => (
                      <div
                        className="d-flex align-items-center gap-4 px-4 mt-3"
                        key={dayIndex}
                      >
                        <select
                          className="form-select"
                          name="day"
                          value={day.day}
                          onChange={(e) =>
                            handleChangeMainInputs(
                              e.target.value,
                              e.target.name,
                              index,
                              dayIndex
                            )
                          }
                        >
                          {days.map((day, i) => (
                            <option value={day} key={i}>
                              {day}
                            </option>
                          ))}
                        </select>
                        <input
                          type="time"
                          className="form-control"
                          name="start_time"
                          value={day.start_time}
                          onChange={(e) =>
                            handleChangeMainInputs(
                              e.target.value,
                              e.target.name,
                              index,
                              dayIndex
                            )
                          }
                        />
                        <label>to</label>
                        <input
                          type="time"
                          className="form-control"
                          name="end_time"
                          value={day.end_time}
                          onChange={(e) =>
                            handleChangeMainInputs(
                              e.target.value,
                              e.target.name,
                              index,
                              dayIndex
                            )
                          }
                        />
                        <button
                          className="btn btn-danger btn-sm ms-2"
                          onClick={() => handleRemoveDay(index, dayIndex)}
                        >
                          &#x2715;
                        </button>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3 py-4">
            <div className="form-group mt-4">
              <button
                className="btn bg-main text-white btn-primary"
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
