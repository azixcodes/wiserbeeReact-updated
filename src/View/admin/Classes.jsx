import { useState } from "react";
import CustomDropdown from "../../Components/customs/dropdowns/CustomDropdown";
import toast, { Toaster } from "react-hot-toast";
import { postRequest } from "../../services/index";
import { getErrorMessages } from "../../Constant/helpers";
import { CalendarClock } from "lucide-react";

const Classes = () => {
  const [formData, setFormData] = useState({
    standard: "",
    section: [],
    class_type: "Online",
    add_subjects: [],
  });

  const [mainInputs, setMainInputs] = useState([]);
  const [subjectChips, setSubjectChips] = useState([]);
  const [sectionChips, setSectionChips] = useState([]);

  const removeChip = (chipToRemove, chipType) => {
    if (chipType === "subject")
      setSubjectChips(subjectChips.filter((chip) => chip !== chipToRemove));
    if (chipType === "section")
      setSectionChips(sectionChips.filter((chip) => chip !== chipToRemove));
  };

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

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

    const format = mainInputs.map((input) => {
      const formattedData = { name: input.subject };
      input.days.forEach((day, index) => {
        formattedData[`day${index + 1}`] = day.day;
        formattedData[`start_time${index + 1}`] = day.start_time;
        formattedData[`end_time${index + 1}`] = day.end_time;
      });
      return formattedData;
    });
    const payload = {
      standard,
      section: sectionChips,
      class_type,
      add_subjects: format,
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
                        onChange={(e) =>
                          handleChangeMainInputs(
                            e.target.value,
                            e.target.name,
                            index
                          )
                        }
                      />
                      <select
                        className="form-select"
                        name="day"
                        onChange={(e) =>
                          handleChangeMainInputs(
                            e.target.value,
                            e.target.name,
                            index,
                            0
                          )
                        }
                        value={inputs.days[0].day}
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
                        placeholder="time"
                        name="start_time"
                        onChange={(e) =>
                          handleChangeMainInputs(
                            e.target.value,
                            e.target.name,
                            index,
                            0
                          )
                        }
                        value={inputs.days[0].time}
                      />
                      <label>to</label>
                      <input
                        type="time"
                        className="form-control"
                        placeholder="time"
                        name="end_time"
                        onChange={(e) =>
                          handleChangeMainInputs(
                            e.target.value,
                            e.target.name,
                            index,
                            0
                          )
                        }
                        value={inputs.days[0].time}
                      />
                      <CalendarClock
                        height={90}
                        width={90}
                        onClick={() => addMoreDays(index)}
                      />
                    </div>
                    {inputs.days.slice(1).map((day, dayIndex) => (
                      <div
                        className="d-flex align-items-center gap-4 px-4 mt-3"
                        key={dayIndex}
                      >
                        <select
                          className="form-select"
                          name="day"
                          onChange={(e) =>
                            handleChangeMainInputs(
                              e.target.value,
                              e.target.name,
                              index,
                              dayIndex + 1
                            )
                          }
                          value={day.day}
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
                          onChange={(e) =>
                            handleChangeMainInputs(
                              e.target.value,
                              e.target.name,
                              index,
                              dayIndex + 1
                            )
                          }
                          value={day.time}
                        />
                        <label>to</label>
                        <input
                          type="time"
                          className="form-control"
                          name="end_time"
                          onChange={(e) =>
                            handleChangeMainInputs(
                              e.target.value,
                              e.target.name,
                              index,
                              dayIndex + 1
                            )
                          }
                          value={day.time}
                        />
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
