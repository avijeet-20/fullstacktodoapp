import { useState } from 'react'
import { Createtodo } from './components/Createtodo'
import { Todos } from './components/Todos'



function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todo")
  .then( async function (res) {
    const json = await res.json();
    setTodos(json);
  });

  return (
      <div>
    <Createtodo></Createtodo>
    <Todos todos = {todos}></Todos>
      </div>
 )
}

export default App
