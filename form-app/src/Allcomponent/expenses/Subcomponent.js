import React from 'react';
import './Subcomponent.css';
import ExpenseDate from './expensedate';
import Card from  '../ui/Card.js'

const Subcomponent = (props) => {
 

 return (

    <Card className="ev">
   <ExpenseDate date = {props.date}></ExpenseDate>
   
    <div className='ex'> 
     <h2>{props.title}</h2> 
     <div className='price'>${props.amount} </div>
    </div> 
   
   
  </Card>

        
    );
}

export default Subcomponent;