
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alerts from "./components/Alerts";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom";




function App() {
  // this mode setmode usestate si for dark mode enabltion 
  const [mode,setMode] = useState('light');

  // this usestate is used for alert handling 
  const[alert,setAlert] = useState(null);

  // now this showalert funtion is used for Alerts components like:- taking two parametres in it like message and type 
  const showAlert = (message,type)=>{
// i'mm passing setAlert function as a boject for alert 
    setAlert({
        msg:message,
        type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);

  }


  // this togglemode function is used for dark mode enabling and functioning for all the thre component navbar,about,textform 
  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor='black'
        showAlert("Dark Mode Has Been Enabled :- ","success");

    }
    else {
        setMode('light');
        document.body.style.backgroundColor='white'
        showAlert("Light Mode Has Been Enabled :- ","success")
    }
};
 
  return (
    <>
    <Router>
      <Navbar title="Sujal" aboutText="About textutils" mode={mode} toggleMode={toggleMode}/>
      <Alerts alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route path="/about" element={<About heading="About Page" mode={mode}/>}/>
        <Route path="/" element={<TextForm heading="Enter You're Text To Analyze :-" mode={mode}/>}/>
         {/* <TextForm heading="Enter you're text to analyzie below:- " mode={mode} showAlert={showAlert}/> */}
      </Routes>
     </div>  
   </Router>
    </>
  );
}
export default App;