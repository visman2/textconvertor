import './Expenseform.css';
import Subcomponent from './Subcomponent';
import Card from '../ui/Card';
import React from 'react';

const  Expenses = (props) => {
    return (
    
      <Card className = "Main">

        {
          props.item.map(
            arrowfunction => (
                 <Subcomponent 
                  date = {arrowfunction.date} 
                title ={ arrowfunction.title} 
                 amount = {arrowfunction.amount} />
          )
          )
        }

       
        
       
        
        </Card>
    );
}



export default   Expenses ;