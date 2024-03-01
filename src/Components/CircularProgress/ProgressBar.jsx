import "./style.css";

const ProgressBar = () => {
  return (
    <div
      role="progressbar"
      aria-valuenow="65"
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ "--value": 65 }}
    ></div>
  );
};

export default ProgressBar;
