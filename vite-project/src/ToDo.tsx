import { TrashSimple } from "phosphor-react";
import { useState } from "react";
import "./ToDo.css";

interface ToDoProps {
  title: string;
  id: any;
  isFinished: boolean;
  onDelete: any;
}

function ToDo({
  title,
  id,
  isFinished,
  onDelete,
}: ToDoProps) {
  const [isComplete, setIsComplete] = useState(isFinished);

  function handleCompletion() {
    setIsComplete(!isComplete);
  }
  function handleDeleteTask() {
    onDelete(id);
  }

  return (
    <div className={isComplete ? "task complete" : "task"}>
      <div>
        <label>
          <button
            type="button"
            className={isComplete ? "isFinished completeButton" : "isFinished"}
            onClick={handleCompletion}
          >
            finalizado
          </button>
        </label>
      </div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <button className="deleteButton" onClick={handleDeleteTask}>
          <TrashSimple size={20} />
        </button>
      </div>
    </div>
  );
}

export default ToDo;
