import { TrashSimple } from "phosphor-react"
import { useState } from "react"
import './ToDo.css'

function ToDo({title, id, isFinished, onDelete}) {
  const [isComplete, setIsComplete] = useState(isFinished)

  function handleCompletion(){
    setIsComplete(!isComplete)
  }
  function handleDeleteTask(){
    onDelete(id)
  }

  
  return (
    <div className={isComplete ? 'task complete' : 'task'}>
      <div>
      <label>
        <input className="checkmark" type="checkbox" onClick={handleCompletion}/>
      </label>
      {title}
      </div>
      <div><button className="deleteButton"  onClick={handleDeleteTask}><TrashSimple size={20}/></button></div>
    </div>
  )
}

export default ToDo