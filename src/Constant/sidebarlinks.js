import {
  dashboardSvg,
  coursesSvg,
  classScheduleSvg,
  gradeBookSvg,
  examsSvg,
  communitySvg,
  messagesSvg,
  settingsSvg,
  librarySvg,
  adminSvg,
  lessonPlanSvg,
  classManagementSvg,
  singleUserBoldSvg,
  ExamsSvg,
  gradesSvg,
  performanceSvg,
  feesSvg,
  parentCalenderSvg,
  // surverySvg,
  // teachericon,
  // userSvg,
} from "./svgs";
export const studentLinks = (t) => [
  {
    label: t("dashboard"),
    path: "/home",
    icon: dashboardSvg,
  },
  {
    label: t("courses"),
    path: "/courses",
    icon: coursesSvg,
  },
  {
    label: t("classSchedule"),
    path: "/class-schedule",
    icon: classScheduleSvg,
  },
  {
    label: t("gradeBook"),
    path: "/grade-book",
    icon: gradeBookSvg,
  },
  {
    label: t("exams"),
    path: "/exams",
    icon: examsSvg,
  },
  {
    label: t("community"),
    path: "/community",
    icon: communitySvg,
  },
  {
    label: t("library"),
    path: "/library",
    icon: librarySvg,
  },
  {
    label: t("accountSettings"),
    path: "/account-settings",
    icon: settingsSvg,
  }
];

export const teacherLinks = (t) => [
  {
    label: t("dashboard"),
    path: "/home",
    icon: dashboardSvg,
  },
  {
    label: t("lessonPlan"),
    path: "/lesson-plan",
    icon: lessonPlanSvg,
    childRoute: "/add-lesson-plan",
  },
  {
    label: t("curriculumDesign"),
    path: "/curriculum-design",
    icon: lessonPlanSvg,
  },
  {
    label: t("classManagement"),
    path: "/class-management",
    icon: classManagementSvg,
    childRoute: "/attendance",
  },
  {
    label: t("personalProfile"),
    path: "/personal-profile",
    icon: singleUserBoldSvg,
  },
  {
    label: t("examsManagement"),
    path: "/exams-management",
    icon: ExamsSvg,
  },
  {
    label: t("classSchedule"),
    path: "/class-schedule",
    icon: classManagementSvg,
  },
  {
    label: t("gradesManagement"),
    path: "/grades-management",
    icon: gradesSvg,
  },
  {
    label: t("community"),
    path: "/community",
    icon: communitySvg,
  },
  {
    label: t("library"),
    path: "/library",
    icon: librarySvg,
  },
  {
    label: t("accountSetting"),
    path: "/account-settings",
    icon: settingsSvg,
  },
];


export const parentLinks = (t) => [
  {
    label: t("dashboard"),
    path: "/home",
    icon: dashboardSvg,
  },
  {
    label: t("exam"),
    path: "/exam",
    icon: ExamsSvg,
  },
  {
    label: t("feesDues"),
    path: "/fees-dues",
    icon: feesSvg,
  },
  {
    label: t("performance"),
    path: "/performance",
    icon: performanceSvg,
  },
  {
    label: t("parentalSurvey"),
    path: "/parent-survey",
    icon: feesSvg,
  },
  {
    label: t("accountSetting"),
    path: "/account-setting",
    icon: settingsSvg,
  },
  {
    label: t("calendar"),
    path: "/calendar",
    icon: parentCalenderSvg,
  },
];


export const adminLinks = (t) => [
  {
    label: t("dashboard"),
    path: "/home",
    icon: dashboardSvg,
  },
  {
    label: t("users"),
    path: "/users",
    icon: singleUserBoldSvg,
  },
  {
    label: t("classes"),
    path: "/classes",
    icon: classScheduleSvg,
  },
];
