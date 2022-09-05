import { TrashSimple } from "phosphor-react";
import { useState } from "react";
import "./ToDo.css";

function ToDo({
  title,
  chicken,
  salp,
  chickenLegs,
  beans,
  id,
  isFinished,
  onDelete,
}) {
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
            Vendido
          </button>
        </label>
      </div>
      <div>
        <h4>Nome : {title}</h4>

        <span>{chicken} Frango</span>

        <span>{chickenLegs} Coxa</span>

        <span>{beans} Feijão</span>

        <span>{salp} Salpicão</span>
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
