import React from "react";
import  './Newexpenseform.css'
import Expensebutton from './Newform'
const Newexpenseform = (props) => {
     const saveExpenseDataHandler = (enteredExpenseData) => {
    const saveExpense = {
        ...enteredExpenseData,
        id : Math.random().toString()
    }
     props.onAddExpense(saveExpense);

        console.log (saveExpense);
     };


return (

<div className  ="newexpenseform">
   

 <Expensebutton
  onSaveExpenseDate =
 {saveExpenseDataHandler}  />
</div>
);

}



export default Newexpenseform;