// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About  from './components/About';
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
       setAlert({
        msg: message,
        type: type
       })

       setTimeout( () =>{
        setAlert(null);
       }, 3000)
  }

  const toggleMenu = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#192a56";
      showAlert(" Dark mode has been enable  ","success");
      document.title = "TextUtils - Dark mode";
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);

      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // }, 1500)

    } else {

      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light  mode has been enable ","success");
      document.title = "TextUtils - Light mode";
    }
  };
  return(
       <>
     <BrowserRouter>
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMenu={toggleMenu}
      />

      <Alert alert={alert} />
      <div className="container my-3"> 

       <Routes>

        {/* /user --> component 1 render
        /user/home  --> component 2 render*/}
        <Route exact  path='/' element={
        <TextForm heading="Enter the text in analyzie" mode={mode} showAlert={showAlert} />} />
        <Route exact path='/about' element={<About />}/>
       </Routes>
       </div>
       </BrowserRouter>
        {/* <About/> */}
       
     
    </>
)
}


export default App;
