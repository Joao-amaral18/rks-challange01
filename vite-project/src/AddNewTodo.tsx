import { PlusCircle } from "phosphor-react";
import { Key, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./AddNewTodo.css";
import ToDo from "./ToDo";

function AddNewTodo() {

  const [tasks, setTasks]: any[] = useState([])
  const [newTask, setNewTask]: any[] = useState('')

  function handleCreateNewTodo() {
    event?.preventDefault();
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        isFinished: false,
        title: newTask,
      },
    ]);
    setNewTask('')
  }
  function handleNewTaskChange($event: any){
    setNewTask($event?.target.value)
  }

  function deleteTask(id: any){
    const taskToDelete = tasks.filter((task: any) => {
        console.log(id)
        return task.id !== id
    })
    setTasks(taskToDelete)
  }

  return (
    <>
    <form onSubmit={handleCreateNewTodo} className="newTaskForm">
      <input name="content" value={newTask} onChange={handleNewTaskChange} type="text" />
      <button>
        Criar <PlusCircle size={16} />
      </button>
    </form>
    <div>
     {tasks.map((val: { id: any; isFinished: any; onDelete: any; title: any; })=> (
      <ToDo
        key={val.id}
        id={val.id}
        isFinished={val.isFinished}
        onDelete={deleteTask}
        title={val.title}
      />
    ))}
    </div>
    </>
  );
}

export default AddNewTodo;
