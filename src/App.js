// import './styles.css';
import { useState } from 'react'

function Item({value, handleDelete}){
  return(
    <li>
      <span>{value}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default function App() {
  const [todos, setTodos] = useState(
      [
        'Walk dog',
        'water plants',
        'wash dishes'
      ]
    );

  function handleSubmitCLick (){

  }

  function handleDeleteClick (value) {
    let newTodos = todos.filter((element)=>element !== value)
    setTodos(newTodos)
  }

  

  let items = todos.map((todo, i)=>{
    return <Item value={todo} key={`${todo}-${i}`} handleDelete={()=>handleDeleteClick(todo) } />
  })

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Add your task" />
        <div>
          <button>Submit</button>
        </div>
      </div>
      <ul>
        {items}
      </ul>
    </div>
  );
}
