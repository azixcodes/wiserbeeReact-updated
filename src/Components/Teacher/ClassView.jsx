import React from "react";
import { clockSvg, studentSvg } from "../../Constant/svgs";
import { CalendarCheck2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const ClassView = () => {

  const { t, i18n  } = useTranslation();
  const isArabic = i18n.language;
  const classSchedual = [
    {
      id: '1',
      heading: "Class 7th Standard",
      time: '30',
      students: '15',
      type: 'Test',
      class: '7th',
      section: 'B',
      topic: 'English Grammar and Punctuation'
    },
    {
      id: '1',
      heading: "Class 7th Standard",
      time: '30',
      students: '15',
      type: 'Test',
      class: '7th',
      section: 'B',
      topic: 'English Grammar and Punctuation'
    },
    {
      id: '1',
      heading: "Class 7th Standard",
      time: '30',
      students: '15',
      type: 'Test',
      class: '7th',
      section: 'B',
      topic: 'English Grammar and Punctuation'
    },

  ]
  return (
    <>
      {classSchedual.map((item, index) => (
        <div className="col-md-4 col-sm-12 mt-2 px-2">
          <div className="container p-2 bg-white pb-3 rounded-4 shadow cursor-pointer">
            <h6 className=" heading-class fw-bold mt-2">{item.heading}</h6>
            <div className="d-flex justify-content-between mt-3">
              <div className=" d-flex align-items-center gap-1">
                <span className="">{clockSvg}</span>
                <span className="text-class">{item.time}Minutes</span>
              </div>
              <div className=" d-flex align-items-center gap-1">
                <span>{studentSvg}</span>
                <span className="text-class">{item.students} Students</span>
              </div>
            </div>

            <div className="mt-4 d-flex  justify-content-between">
              <div className="test p-2 ">
                <p className="m-0 p-0">{item.type}</p>
              </div>
              <div className="seven-class p-2">
                <p className="m-0 p-0">{item.class} Class</p>
              </div>
              <div className="section p-2">
                <p className="m-0 p-0">Section {item.section}</p>
              </div>
            </div>
            <div className="d-flex mt-3 gap-2">
              <span className="english-para">Topic:</span>
              <span className="english-para">{item.topic}</span>
            </div>
            <div className=" d-flex justify-content-center mt-3">
              <button className="btn-class">
                {isArabic ==="sa" ? (
                  <>
                    {t('Scheduled')} <CalendarCheck2 size={15} />
                  </>
                ) : (
                  <>
                    <CalendarCheck2 size={15} /> {t('Scheduled')}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ClassView;
