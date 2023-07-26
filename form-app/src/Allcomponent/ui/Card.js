import './Card.css'
import React from 'react';


const Card = (props) => {
   const c = 'card '+ props.className
    return ( 
    <div className={c}>
         <div >{props.children}  </div>
    </div>
  
    
    ) 

    }


export default Card;