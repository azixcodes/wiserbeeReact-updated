import React from "react";
import Home from "./View/Home";
import SignIn from "./View/Sign";
import SignUp from "./View/SignUp";
import NotFound from "./View/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute Component={SignIn}/>} />
      <Route path="/home" element={<ProtectedRoute Component={Home}/>} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
