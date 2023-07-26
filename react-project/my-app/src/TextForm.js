import React, { useState } from 'react'




export default function TextForm(props) {
  
  const handleupClick =() => {
   // console.log ("uppercase was clicked" + text);
    let newText = text.toUpperCase();
      setText(newText)
  }
  const handleloClick =() => {
    // console.log ("lowercase was clicked" + text);
     let newText = text.toLowerCase();
       setText(newText)
   }
   const handlechnClick =() => {
     let newText = ("");
       setText(newText)
   }
  const handleCopy = () => {
   var text = document.getElementById("mybox");
    text.select();
   navigator.clipboard.writeText(text.value);
  
  }
  const handleonChange  =(event) => {
    console.log ("on change");
    setText (event.target.value);
  }
  const [text, setText] = useState('Enter Text here');

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
     
         <h1 >{props.text}</h1>
          <div className= "mb-3">
          
             <textarea className="form-control" value={text} onChange={handleonChange} 
              id ="mybox"  rows="8">
              

             </textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupClick}>convert to uppercase</button>
        <button className="btn btn-success mx-2" onClick={handleloClick}>convert to Lowercase</button>
        <button className="btn btn-primary mx-2"  onClick={handlechnClick}>Clear Text</button>
        <button className="btn btn-dark mx-2" onClick={handleCopy}>Copy Text</button>

    </div>
<div className="container my-3" style= { props.mode=== 'dark'? {color:'white'}: {color:'black'}}>
     <h2 style= { props.mode=== 'dark'? {color:'white'}: {color:'black'}} >My Text summary</h2>
    <p>{text.split(" ").length} Words {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes Read</p>
   <h3>Preview</h3>
   <p>{text.length>0? text:"Enter something in the textbox above to preview it here"}</p>

</div>
</>
  )
}
