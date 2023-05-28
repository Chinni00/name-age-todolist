import React, { useState } from 'react'

const Form = (props) => {
    const[name,setName] = useState('');
    const [age,setAge] = useState('');
    const formHandler=(event)=>{
        event.preventDefault();
        if(name.trim().length>0 && age.trim()!='' ){
        
        let newItem={
            name:name,
            age:age,
            id:Math.random()
        }
        props.onAddition(newItem)
    }
        
    }
    const nameHandler = (event)=>{
        
        
            setName(event.target.value)
        
    }
    const ageHandler = (event)=>{
        
            setAge(event.target.value)
        
    }

  return (
    <form onSubmit={formHandler}>
        <label>Name:</label>
        <input type='text' onChange={nameHandler} name='name' /><br />
        <label>Age:</label>
        <input name='age' onChange={ageHandler} /><br />
        <input type='submit' />
    </form>
  )
}

export default Form