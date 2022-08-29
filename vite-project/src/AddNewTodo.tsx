import { PlusCircle } from 'phosphor-react'
import './AddNewTodo.css'

function AddNewTodo() {
  return (
    <form className='newTaskForm'>
        <input type="text" />
        <button>Criar <PlusCircle size={16} /></button>
    </form>
  )
}

export default AddNewTodo