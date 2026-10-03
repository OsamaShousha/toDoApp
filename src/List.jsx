

function List({todos, toggle, removeTodo}){
    return(
      <ol className="meny">
      {todos.map((t)=>(
         <li className={t.isDone ? "done" : ""} key={t.id}>
        


        <button  className='toggle' type="button" onClick={()=>toggle(t.id)}>
         

          {t.isDone ?  "Avmarkera" : "Klar"}
          
          
        </button>{"  "}

         {t.text}{" "}
        
        
        
        <button  className='delete'type="button" onClick={()=>removeTodo(t.id)}>Ta bort</button>
        </li>
      ))}
      
     </ol>
    )
}
export default List