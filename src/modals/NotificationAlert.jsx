import React, { useState } from "react";
import { X } from "lucide-react";
import PushNotification from "./PushNotification";
import IconWrapper from "../Components/Common/IconWrapper";

const NotificationAlert = ({ onRequestClose }) => {
  // Initialize state for alerts
  const [alerts, setAlerts] = useState([
    { id: 1, icons: "warn", type: 'warn', message: "Assignment is not uploaded" },
    { id: 2, icons: "info", type: 'info', message: "Here's some information you may find useful!" },
    { id: 3, icons: "error", type: 'error', message: "Assignment last date is 01 July, 2024 " },
    { id: 4, icons: "success", type: 'success', message: "Your quiz submitted successfully!" }
  ]);

  // Clear all alerts
  const clearAllAlerts = () => {
    setAlerts([]);
  };

  return (
    <div className="container-fluid p-0 m-0 pb-4 modalWrapper">
      <div className="row d-flex justify-content-center p-0 m-0">
        <div className="d-flex py-1 align-items-center Report_style px-4 justify-content-between">
          <h3 className="Report_style">Notifications</h3>
          <IconWrapper bg="#463c77" color="white" handleClick={onRequestClose}>
            <X />
          </IconWrapper>
        </div>
      </div>
      <div className="row mt-3 p-0 m-0 px-2 notificationScreen">
        {alerts.length > 0 ? (
          alerts.map((alert) => (
            <PushNotification key={alert.id} alert={alert} />
          ))
        ) : (
          <div className="noNotifications text-center m-auto">No New Notifications</div>
        )}
      </div>
      <div className="d-flex justify-content-end gap-2 px-2 mt-3">
        <button
          type="button"
          className="btn-cancel"
          onClick={onRequestClose}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn-update"
          onClick={clearAllAlerts}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default NotificationAlert;
