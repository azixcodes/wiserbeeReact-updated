import React from "react";
import toast, { Toaster } from "react-hot-toast";
const Dashboard = () => {
  return (
    <div>
      <Toaster />
      <button
        className="btn btn-primary"
        onClick={() => toast.success("You clicked the button")}
      >
        Click Me
      </button>
    </div>
  );
};

export default Dashboard;
