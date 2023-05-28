import "./App.css";
import { useState } from "react";
import TodoList from "./Components/TodoList";
import Form from "./Components/Form";

function App() {
  const [list, setList] = useState([
    {
      name: "vinod",
      age: 25,
      id: "l1",
    },
    {
      name: "chandu",
      age: 25,
      id: "l2",
    },
  ]);

  const additionHandler=(newItem)=>{
   setList(prevList =>{
    return [newItem,...prevList]
   })
  }

  const subHandler =(id)=>{
    let updatedList = list.filter(item => item.id !== id);
    setList([...updatedList])
  }

  return <div className="App">
    <Form  onAddition={additionHandler}/>
    <TodoList onSub={subHandler} items={list} />
  </div>;
}

export default App;
