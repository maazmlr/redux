import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { addTodoAction } from './store/action/todo'
import { formAction } from './store/action/form'
function App() {

  const todos=useSelector((state)=>{
    console.log(state)
    return state.todoReducer
  })

  console.log(todos)
  const dispatch=useDispatch();

  function handleInput(e){

    dispatch(formAction(e.target.value))

  }
  function addTodo(){

    dispatch(addTodoAction("this s maaz"))

  }


  return (
    <>

      <input type="text" onInput={handleInput} />
      <button onClick={addTodo}>Add todo</button>
      
    </>
  )
}

export default App
