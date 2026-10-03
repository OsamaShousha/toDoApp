import { useState } from 'react'
import './App.css'
import List from "./List"
import Form from "./Form"

function App() {
  const [todos, setTodos] = useState([
    
  { id: 1, text: "Köp kaffe", isDone: false },
  { id: 2, text: "Öppna campet", isDone: true },
  {id: 3, text: "Pusha till GitHub", isDone: false },
  {id: 4, text: "Boja Om", isDone: false },
  ]);

   const [text, setText] = useState("");



 
function addTodo(e){
   
  e.preventDefault();

  const trimmed = text.trim();
   
  if(!trimmed)return;
  

  setTodos([...todos, {id:Date.now(), text: trimmed, isDone: false}]);

   
  setText("");
}



function toggle(id){
  setTodos(
    todos.map((t)=>(t.id === id ? {...t, isDone: !t.isDone}:t)));
}




function removeTodo(id){
  setTodos(todos.filter((t)=> t.id !==id));

}











  return (
    <>
    <main className="main">
     <h1>Min ToDo</h1>
    {/* {/* <main className="main" > */}
         {/* <form  className="form" onSubmit={addTodo}>
      <label >Lägg till en uppgift</label>
      <input
       className="input"
       value={text}
       

    onChange={(e)=>setText(e.target.value)}

         placeholder="Ny uppgift"
         />
          
      <button className="add" type="submit">Lägg till</button>
     </form>  */}


     {/* <ol className="meny">
      {todos.map((t)=>(
         <li className={t.isDone ? "done" : ""} key={t.id}>
        


        <button  className='toggle' type="button" onClick={()=>toggle(t.id)}>
         

          {t.isDone ?  "Avmarkera" : "Klar"}
          
          
        </button>{"  "}

         {t.text}{" "}
        
        
        
        <button  className='delete'type="button" onClick={()=>removeTodo(t.id)}>Ta bort</button>
        </li>
      ))}
      
    

     </ol> */}
 <Form 
     text={text}
     addTodo={addTodo}
     setText={setText}
     />
     
     <List
     todos={todos}
     toggle={toggle}
     removeTodo={removeTodo}
     />



    

    </main>
  
 
  </>
  );
}

export default App
