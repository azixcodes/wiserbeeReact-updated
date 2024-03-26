import React from "react";

const NameAvatar = ({ name, rounded = false }) => {
  let suffix = "";
  let arr = name.split(" ");
  if (arr[1]) {
    suffix = arr[0].charAt(0) + arr[1].charAt(0);
  } else {
    suffix = arr[0].charAt(0) + arr[0].charAt(1);
  }

  return (
    <div className={`${rounded ? "roundedNameAvatar" : "nameAvatar"}  px-2`}>
      {suffix}
    </div>
  );
};

export default NameAvatar;
