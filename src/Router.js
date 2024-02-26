import React from "react";
import Home from "./View/Home";
import SignIn from "./View/Sign";
import SignUp from "./View/SignUp";
import NotFound from "./View/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import {
  AccountSettings,
  ClassSchedule,
  Community,
  Courses,
  Exams,
  GradeBook,
  Messages,
  Dashboard,
} from "./View/index";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute Component={Dashboard} />} />
      <Route path="/home" element={<ProtectedRoute Component={Home} />} />
      <Route
        path="/account-settings"
        element={<ProtectedRoute Component={AccountSettings} />}
      />
      <Route
        path="/class-schedule"
        element={<ProtectedRoute Component={ClassSchedule} />}
      />
      <Route
        path="/community"
        element={<ProtectedRoute Component={Community} />}
      />
      <Route path="/courses" element={<ProtectedRoute Component={Courses} />} />
      <Route path="/exams" element={<ProtectedRoute Component={Exams} />} />
      <Route
        path="/grade-book"
        element={<ProtectedRoute Component={GradeBook} />}
      />
      <Route
        path="/messages"
        element={<ProtectedRoute Component={Messages} />}
      />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
