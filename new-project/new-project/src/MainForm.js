
import React, { useEffect, useState } from 'react';
import './Button.css'


          
 const MainForm = () => {
    const data = {name:"",email:"",password:""};
    const [inputData,setInputData] = useState(data);
    const [flag, setFlag] = useState(false)
    useEffect ( () => {
      console.log ("Registered")
    }, [flag]

    )
    const handledata = (e) =>{
             setInputData ({...inputData,[e.target.name]:e.target.value})

               console.log (e.target.value);
    }
    
    const handlesubmit = (e) => {
      e.preventDefault();
      if (!inputData.name || !inputData.email || !inputData.password )
      alert ("All fields are Mandatory")
   
    else {
      setFlag (true)
    }
  }
    return (
      <> <pre>{(flag)?<h2 className='.ui-define'> hello {inputData.name}, you have Registered Sucessfully</h2>: ""}</pre>    
      <form  className ="container" onSubmit={handlesubmit}> 

         <div  className ="header">
           <h2>Registration Form</h2>
         </div>
         <div>
                 <input 
                 type='text'  
                 placeholder='Enter your name'
                  name ="name"
                  value={inputData.name} 
                  onChange={handledata}>
                
                 </input>
                 <input type='text'
                   placeholder='Enter your Email' 
                   name ="email" 
                   value={inputData.email} onChange={handledata}>
                
                 </input>
                 <input type='password' 
                  placeholder='Enter your Password'
                   name ="password"
                    value={inputData.password} onChange={handledata}>
                
                </input>
                <button className='btn' type='submit'> <h3>submit</h3></button>
         </div>
        </form>
        </>
    );
  }

  export default MainForm;