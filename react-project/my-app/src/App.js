
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import Alert from './Alert';

import React ,{ useState } from 'react';


function App () {
  const [mode,setMode] = useState("light");

 const toggleMode = () => {
   if (mode === 'light') {
    setMode("dark");
    document.body.style.backgroundColor = "grey";
   }
   else {
    setMode("light");
    document.body.style.backgroundColor = 'whitesmoke';
   }
 
 }
  return (
 <>

{/*<Navbar title = "TextPro" Aboutus ="AboutText" mode={mode} toggleMode = {toggleMode} /> */}  
<Navbar title = "TextPro" mode={mode} toggleMode= {toggleMode} /> 
<Alert alert = "this is a alert"/>

<div className="container  my-4"  >
     <TextForm text ="Enter The text to analyze" mode={mode}/> 
     {/*<About/>*/}  
</div>



 </>
   
  )
}

export default App;
