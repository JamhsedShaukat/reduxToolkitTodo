import React, {useState} from 'react'
import './AddTodo.css'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="form-conatiner">
      <input
        type="text"
        className=" inputfeild "
        placeholder="Enter your task for the day"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="submit-btn"
      >
      Add
      </button>
    </form>
  )
}

export default AddTodo