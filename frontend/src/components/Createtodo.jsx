import { useState } from "react";

export function Createtodo(props){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    return (
        <div>
            <input style={{
                margin:10,
                padding:10
            }} id="title" onChange={function(e){
              const value =  e.target.value;
              setTitle(value);

            }} type="text" placeholder="title"></input><br/>
            <input style={{
                margin:10,
                padding:10
            }} id="desc" onChange={function(e){
              const value =  e.target.value;
              setDescription(value);

            }} type="text" placeholder="description"></input><br/>
            <button id="btn" onClick={function(){
                fetch("http://localhost:3000/todo",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description:description
                    }),
                    headers:{
                        "Content-type": "application/json"
                    }
                }).then(async function(res) {
                    const json = await res.json();
                    alert("Todo added");
                })
            }} style={{
                margin:10,
                padding:10
            }}>add to do</button>
        </div>
    ) 
    }