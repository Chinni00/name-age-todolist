import React from 'react'
import { Todo } from './Todo'
import "./TodoList.css"

export default function TodoList(props) {
    const deleteHandler=(id)=>{
         props.onSub(id);
        
    }
  return (
    <div className='todo-list' >
       {props.items.map(item=> <Todo key={item.id}  onDelete={deleteHandler}  items={item} /> )}
        
    </div>
  )
}
