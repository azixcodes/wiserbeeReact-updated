// AppRouter.js
import React from "react";
import Home from "./View/Home";
import NotFound from "./View/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  AccountSettings,
  ClassSchedule,
  Community,
  Courses,
  Exams,
  GradeBook,
  // Messages,
  Dashboard,
  CourseDetails,
  AssesmentWelcome,
  Assesment,
  ExamQuestions,
  Library,
  AdminPanel,
} from "./View/index";
// Teachers route
import {
  CurriculumDesign,
  GradeManagement,
  LessonPlan,
  ClassManagement,
  PersonalProfile,
  ExamsManagement,
  AddLessonPlan,
} from "./View/Teacher/index";

import Sign from "./View/SignInFirst";
import SignIn from "./View/SignIn";
import SignUpFirst from "./View/SignUpFirst";
import SignUp from "./View/SignUp";
import ForgotPassword from "./View/ForgotPassword";
import OtpVerification from "./View/OtpVerification";
import ResetPassword from "./View/ResetPassword";

const AppRouter = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  // Initialize role with a default value
  let role = "Student";
  if (user && user.user) {
    role = user.user;
  }

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute Component={Dashboard} />} />
      {role === "Student" ? (
        <>
          <Route path="/home" element={<ProtectedRoute Component={Home} />} />
          <Route
            path="/account-settings"
            element={<ProtectedRoute Component={AccountSettings} />}
          />
          <Route
            path="/library"
            element={<ProtectedRoute Component={Library} />}
          />
          <Route
            path="/class-schedule"
            element={<ProtectedRoute Component={ClassSchedule} />}
          />
          <Route
            path="/admin-panel"
            element={<ProtectedRoute Component={AdminPanel} />}
          />
          <Route
            path="/community"
            element={<ProtectedRoute Component={Community} />}
          />
          <Route
            path="/courses"
            element={<ProtectedRoute Component={Courses} />}
          />
          <Route path="/exams" element={<ProtectedRoute Component={Exams} />} />
          <Route
            path="/grade-book"
            element={<ProtectedRoute Component={GradeBook} />}
          />
          <Route
            path="/assesment-welcome"
            element={<ProtectedRoute Component={AssesmentWelcome} />}
          />
          <Route
            path="/assesment"
            element={<ProtectedRoute Component={Assesment} />}
          />
          <Route
            path="/course/:id"
            element={<ProtectedRoute Component={CourseDetails} />}
          />
          <Route
            path="/exams/:id"
            element={<ProtectedRoute Component={ExamQuestions} />}
          />
          {/* <Route
            path="/messages"
            element={<ProtectedRoute Component={Messages} />}
          /> */}
        </>
      ) : (
        <>
          {/* Teacher routes */}
          <Route
            path="/course/:id"
            element={<ProtectedRoute Component={CourseDetails} />}
          />
          <Route
            path="/add-lesson-plan"
            element={<ProtectedRoute Component={AddLessonPlan} />}
          />
          <Route
            path="/exams/:id"
            element={<ProtectedRoute Component={ExamQuestions} />}
          />
          <Route
            path="/curriculum-design"
            element={<ProtectedRoute Component={CurriculumDesign} />}
          />
          <Route
            path="/grades-management"
            element={<ProtectedRoute Component={GradeManagement} />}
          />
          <Route
            path="/lesson-plan"
            element={<ProtectedRoute Component={LessonPlan} />}
          />
          <Route
            path="/class-management"
            element={<ProtectedRoute Component={ClassManagement} />}
          />
          <Route
            path="/exams-management"
            element={<ProtectedRoute Component={ExamsManagement} />}
          />
          <Route
            path="/personal-profile"
            element={<ProtectedRoute Component={PersonalProfile} />}
          />
          <Route
            path="/account-settings"
            element={<ProtectedRoute Component={AccountSettings} />}
          />
          <Route
            path="/library"
            element={<ProtectedRoute Component={Library} />}
          />
          <Route
            path="/community"
            element={<ProtectedRoute Component={Community} />}
          />
        </>
      )}

      {/* public routes */}
      <Route path="/sign-in-first" element={<Sign />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up-first" element={<SignUpFirst />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp-verification" element={<OtpVerification />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
