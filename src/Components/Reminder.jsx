import React, { useState } from 'react'
import './Reminder.css'

function Reminder() {

    const [reminder,setRemainder]=useState([]);
    const [newRemainder,setNewRemainder]=useState('');

const handleChange=(event)=>{
    setNewRemainder(event.target.value);
}

const handleClick=()=>{
        if(newRemainder){
            setRemainder([...reminder,newRemainder]);
            setNewRemainder('');
        }
    }
 

const handleDelete=(id)=>{

    setRemainder(reminder.filter((reminder,index)=>{
        return index!=id
    }))
}


  return (
    <div className='container'>
        <div className='card'> 
            <h1>Reminder</h1>

            <div className='input-container'>
                <input type="text" placeholder='Enter the Reminder' value={newRemainder} onChange={handleChange} />
                <button className='add-btn' onClick={handleClick}>Add Reminder</button>
            </div>
            
            {
              reminder.length >0 ?(
                <ul className='reminder-list'>
                {reminder.map((reminder,index)=>(
                    <li key={index}>
                        {reminder}
                        <button className='delete-btn'onClick={()=>handleDelete(index)}> Delete</button>
                        
                    </li>
                ))}
            </ul>
              )  : <p>No reminder found</p>
            }
            

        </div>
    </div>
  )
}

export default Reminder
