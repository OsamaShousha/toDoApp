
function Form({ addTodo, text, setText }){
    return(
    
        
         <form  className="form" onSubmit={addTodo}>
      <label >Lägg till en uppgift</label>
      <input
       className="input"
       value={text}
       

    onChange={(e)=>setText(e.target.value)}

         placeholder="Ny uppgift"
         />
          
      <button className="add" type="submit">Lägg till</button>
     </form>
        
    )
}
export default Form