
import React, { useState,useEffect } from "react";


import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";



function App() {
  const [theme, setTheme] = useState('light');
 
  useEffect(() => {
    document.body.className = theme;
    
  }, [theme]);
 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
   
    setAlert({
      msg: message,
      type: type,
    });

   

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

 

  return (
    <>
    
     <Navbar  changeTheme={setTheme} currentTheme={theme}/>
     
       
     
      <Alert alert={alert} />
      
            <TextForm changeTheme={setTheme}currentTheme={theme}
            heading="Enter the text to analyze below"
            summaryHead="Summery Of Your Text"
           
            showAlert={showAlert}
            />
       

     
    </>
  );
}

export default App;
