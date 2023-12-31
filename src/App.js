import "./App.css";
import Navbar from "./Components/Navbar.js";
import TextArea from "./Components/TextArea";
import React, { useState } from 'react';
import Alert from "./Components/Alert";
import Accordion from './Components/Accordion';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); // to toggle between dark and light modes.

  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {

    if (mode === 'light') {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      // let tArea = document.getElementById("texrea");
      // tArea.style.color = "white";
      // tArea.style.backgroundColor = "black";

      // let tHead = document.getElementById("textHead");
      // tHead.style.color = "white";

      showAlert("success", "Dark Mode Enabled !");

      document.title = "TextUtils-DarkMode";


      setMode('dark');
    }
    else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";


      showAlert("success", "Light Mode Enabled !");

      document.title = "TextUtils";



      setMode('light');
    }
  }

  return (
    <>



      <Router>

        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

         
          <Routes>
            <Route exact path="/About" element={
               <div className="container-fluid">
               <Accordion mode={mode}/>
             </div>
            }/>
           
            <Route exact path="/" element={
               <div className="container">
               <TextArea showAlert={showAlert} mode={mode}/>
             </div>
            }/>
             
          </Routes>
         



      </Router>




    </>
  );
}

export default App;