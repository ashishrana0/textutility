import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Alert from "./components/Alert";
import React, { useState } from "react";

// import Section from "./components/Section";
  // "homepage": "https://ashishrana0.github.io/my-app",

// "predeploy": "npm run build",
    // "deploy": "gh-pages -d build",
function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setalert(null);
    }, 1500);
  }
  const [mode, setMode] = useState("light");
  // const goldenMode =()=>{
  //   if (mode === "light") {
  //     setMode("warning");
  //     document.body.style.backgroundColor = "rgb(146 117 24)";
  //     document.body.style.color = "#fff";
  //     showAlert("Dark mode enabled", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     document.body.style.color = "#ffc107";
  //     showAlert("Light mode enabled", "success");
  //   }
  // }
  // const redMode = () => {
  //   if (mode === "light") {
  //     setMode("danger");
  //     document.body.style.backgroundColor = "#580e15";
  //     document.body.style.color = "#fff";
  //     showAlert("Dark mode enabled", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     document.body.style.color = "#dc3545";
  //     showAlert("Light mode enabled", "success");
  //   }
  // };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(3 35 64)";
      document.body.style.color = "#fff";
      showAlert("Dark mode enabled", "success");
    } 
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "rgb(3 35 64)";
      showAlert("Light mode enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title={"Text utilities"}
        mode={mode}
        toggleMode={toggleMode}
        // goldenMode={goldenMode}
        // redMode={redMode}
      />
      <Alert alert={alert} />
      <Text mode={mode} showAlert={showAlert} />

      {/* <Section /> */}
    </>
  );
}

export default App;
