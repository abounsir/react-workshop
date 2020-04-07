import React from "react";

const input = {
  width: "300px",
  padding: "16px 12px",
  border: "solid 1px rgb(255, 255, 255)",
  borderRadius: "5px",
  marginBottom: "8px",
};

export default ({ name, type, placeholder }) => {
  return (
    <input style={input} placeholder={placeholder} name={name} type={type} />
  );
};
