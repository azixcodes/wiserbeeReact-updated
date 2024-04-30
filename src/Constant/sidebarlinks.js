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
} from "./svgs";
export const studentLinks = [
  {
    label: "Dashboard",
    path: "/home",
    icon: dashboardSvg,
  },
  {
    label: "Courses",
    path: "/courses",
    icon: coursesSvg,
  },
  {
    label: "Class Schedule",
    path: "/class-schedule",
    icon: classScheduleSvg,
  },
  {
    label: "Grade Book",
    path: "/grade-book",
    icon: gradeBookSvg,
  },
  {
    label: "Exams",
    path: "/exams",
    icon: examsSvg,
  },
  {
    label: "Community",
    path: "/community",
    icon: communitySvg,
  },
  // {
  //   label: "Admin Panel",
  //   path: "/admin-panel",
  //   icon: adminSvg,
  // },
  {
    label: "Library",
    path: "/library",
    icon: librarySvg,
  },
  // {
  //   label: "Message",
  //   path: "/messages",
  //   icon: messagesSvg,
  // },
  {
    label: "Account Setting",
    path: "/account-settings",
    icon: settingsSvg,
  },
];

export const teacherLinks = [
  {
    label: "Dashboard",
    path: "/home",
    icon: dashboardSvg,
  },
  {
    label: "Lesson Plan",
    path: "/lesson-plan",
    icon: lessonPlanSvg,
    childRoute: "/add-lesson-plan",
  },
  {
    label: "Curriculum Design",
    path: "/curriculum-design",
    icon: lessonPlanSvg,
  },
  {
    label: "Class Management",
    path: "/class-management",
    icon: classManagementSvg,
  },
  {
    label: "Personal Profile",
    path: "/personal-profile",
    icon: singleUserBoldSvg,
  },
  {
    label: "Exams Management",
    path: "/exams-management",
    icon: ExamsSvg,
  },
  {
    label: "Class Schedule",
    path: "/class-schedule",
    icon: classManagementSvg,
  },
  {
    label: "Grades Management",
    path: "/grades-management",
    icon: gradesSvg,
  },
  {
    label: "Community",
    path: "/community",
    icon: communitySvg,
  },
  {
    label: "Library",
    path: "/library",
    icon: librarySvg,
  },
  {
    label: "Account Setting",
    path: "/account-settings",
    icon: settingsSvg,
  },
];
