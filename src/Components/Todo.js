import React from 'react'
import "./Todo.css"

export const Todo = (props) => {
    const onDelete =()=>{
         props.onDelete(props.items.id)
        
    }
    
  return (
    <div onClick={onDelete} className='todo-item'> 
        {props.items.name} (Age:{props.items.age})
    </div>
  )
}
