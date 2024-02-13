import { useState } from 'react'
export function Todos({todos}) {
console.log(todos);

    return( <div>
        {todos.map(function(todo) {
         
         const [completed,setCompleted] = useState(todo.completed);
          
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button id="button" onClick={function(e){
                   fetch("http://localhost:3000/todo", {
                    method:"PUT",
                    body: JSON.stringify({
                        id:e.target._id
                    }),
                    headers:{
                        "Content-type": "application/json",
                        "Content-Length": "0"
                    }
                   }).then(ondone => {
                     console.log(ondone);
                   setCompleted(e.target.completed);
                    
                   });
                }}>{completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
    )
}