import "./App.css";
import Newexpenseform from "./Allcomponent/expenses/Newexpenseform";
import React, { useState } from "react";
import Expenses from "./Allcomponent/expenses/Expenseform";
import Card from "./Allcomponent/ui/Card";






let DUMMY_EXpense = [



];
 
const  Create = () => {
  
   

    const [expenses,setExpenses] = useState(DUMMY_EXpense);
    fetch ('https://reqres.in/api/users/2')
.then(
   response => {
      return response.json();
   }
)
    
   .then (
      data => {
         console.log (data);
         setExpenses(data);
      }
   ) 

  
  
   const addExpenseHandler = (expense)=> {
     const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense)
  
  
    
   }


   return (
    <div className='new'>
       <h2 className="h">Expense Tracker</h2>
       <Expenses item = {expenses} />
       <Newexpenseform onAddExpense = {addExpenseHandler}/>
     
     
    </div>
          );
    
   }
   
   
   
   
  


export default Create;