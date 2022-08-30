import { useState } from "react"
import './ToDo.css'

function ToDo({title, id, isFinished}) {
  const [isComplete, setIsComplete] = useState(isFinished)

  function handleCompletion(){
    setIsComplete(!isComplete)
  }
  return (
    <div className={isComplete ? 'task complete' : 'task'}>
      <label>
        <input className="checkmark" type="checkbox" onClick={handleCompletion}/>
      </label>
      {title}
    </div>
  )
}

export default ToDo