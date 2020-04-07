import React, { useState } from "react";
import background from "./../../assets/images/background.jpg";
import Input from "./../../Common/input";
import Button from "./../../Common/button";
const container = {
  color: "white",
  backgroundColor: "#2c023ed9",
  padding: "10px",
  fontFamily: "Arial",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "500px",
};
export default () => {
  const [login, setLogin] = useState("ayhaja");
  console.log("hadi login: ", login);
  return (
    <div>
      <div style={container}>
        <h1 onClick={() => setLogin("okokokok")}>Login</h1>
        <Input name="username" type="text" placeholder="your name here" />
        <Input
          name="password"
          type="password"
          placeholder="your password here "
        />
        {
          //<Button onClick={() => setLogin("tbdel dindimmak")}>Login</Button>
        }
        <button onClick={() => setLogin("tbdel dindimmak")}>Login</button>
      </div>
      {/* zhnvlknhrezlvkernve */}
      <img src={background} alt="Smiley face" style={{ width: "100%" }} />
    </div>
  );
};
