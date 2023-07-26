
import './expensedate.css'
import React from 'react';

let ExpenseDate = (props)=> {

    const month = props.date.toLocaleString('en-US',{ month :'long'});
    const year = props.date.getFullYear();
    const day= props.date.toLocaleString('en-US',{ month :'2-digit'});


return (

    <div className="dat">
        <div> {month} </div> 
       <div>{ year }</div> 
       <div>{ day }</div> 
</div>

) 
}

export default ExpenseDate;