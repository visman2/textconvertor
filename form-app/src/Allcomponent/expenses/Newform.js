import React ,{useState} from "react";
import './Form.css'

const Expensebutton = (props) => {

 const [enterTitle,setEnterTitle] = useState ("");
 const [enterAmount,setEnterAmount] = useState ("");
 const [enterDate,setEnterDate] = useState ("");

const titleChange = (event) => {setEnterTitle(event.target.value)};
const amountChange = (event) => {setEnterAmount(event.target.value)};
const dateChange = (event) => {setEnterDate(event.target.value)};

const SubmitHandler = (event) => {
 event.preventDefault();
 const expenseData = {
    title : enterTitle,
    amount : enterAmount,
    date : new Date (enterDate)
    
 }
props.onSaveExpenseDate(expenseData);
 console.log (expenseData);
 setEnterTitle ("");
 setEnterAmount ("");
 setEnterDate("");
}

return ( 
     <div> <h3>Expense add new entry</h3>
    <form onSubmit={SubmitHandler}>
        <div className="controls">
           <div className="control">
              <label>Title</label>
               <input type="text" value ={enterTitle} onChange={titleChange}/>

            </div>

       </div>

       <div className="controls">
           <div className="control">
              <label>Amount</label>
               <input type="number" value = {enterAmount}min="0.01" step= "0.01" onChange={amountChange}/>

            </div>

       </div>
       <div className="controls">
           <div className="control">
              <label>date</label>
               <input type="date" value ={enterDate} onChange={dateChange}/>

            </div>

       </div>
         <div>
             <button type="submit">
               Add Expense
              </button>
         </div>
        
    </form>
    </div>
)

}


export default Expensebutton;