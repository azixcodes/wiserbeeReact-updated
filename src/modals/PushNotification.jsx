import React, { useState } from "react";
import { X, Eye, FileWarning, InfoIcon, AlertTriangleIcon, BadgeCheck } from "lucide-react";

const PushNotification = ({ alert }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  // Determine which Lucide icon to use based on alert.icons
  let mainIcon;
  switch (alert.icons) {
    case "warn":
      mainIcon = <FileWarning size={24} className="icon-warn" />;
      break;
    case "info":
      mainIcon = <InfoIcon size={24} className="icon-info" />;
      break;
    case "error":
      mainIcon = <AlertTriangleIcon size={24} className="icon-error" />;
      break;
    case "success":
      mainIcon = <BadgeCheck size={24} className="icon-success" />;
      break;
    default:
      mainIcon = null; // Handle default case if necessary
      break;
  }

  return (
    <div className={`alertNoti alertNoti-${alert.type} d-flex align-items-center justify-content-between`}>
      <div className="icon-wrapper">
        {mainIcon}
      </div>
      <div className="message">
        <span>{alert.message}</span>
      </div>
      <div className="actions d-flex">
        <button className="btn btn-sm btn-primary me-2" style={{ background: "none", border: "none" }}>
          <Eye size={20} style={{ color: "#007bff", background: "none", border: "none" }} />
        </button>
        <button className="btn btn-sm btn-danger" onClick={handleClose} style={{ background: "none", border: "none" }}>
          <X size={20} style={{ color: "#dc3545", background: "none", border: "none" }} />
        </button>
      </div>
    </div>
  );
};

export default PushNotification;
