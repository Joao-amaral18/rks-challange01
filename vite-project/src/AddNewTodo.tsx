import { PlusCircle } from "phosphor-react";
import { Key, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./AddNewTodo.css";
import ToDo from "./ToDo";

function AddNewTodo() {
  const [tasks, setTasks]: any[] = useState([]);
  const [newTask, setNewTask]: any[] = useState("");
  const [newChicken, setNewChicken]: any[] = useState("");
  const [newChickenLegs, setNewChickenLegs]: any[] = useState("");
  const [newBeans, setNewBeans]: any[] = useState("");
  const [newSalp, setNewSalp]: any[] = useState("");

  function handleCreateNewTodo() {
    event?.preventDefault();
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        isFinished: false,
        title: newTask,
        chicken: newChicken,
        chickenLegs: newChickenLegs,
        beans: newBeans,
        salp: newSalp,
      },
    ]);
    setNewTask("");
    setNewChicken("");
    setNewChickenLegs("");
    setNewBeans("");
    setNewSalp("");
  }
  function handleNewTaskChange($event: any) {
    setNewTask($event?.target.value);
  }
  function handleNewChickenChange($event: any) {
    setNewChicken($event?.target.value);
  }
  function handleNewBeansChange($event: any) {
    setNewBeans($event?.target.value);
  }
  function handleNewSalpChange($event: any) {
    setNewSalp($event?.target.value);
  }
  function handleNewChickenLegsChange($event: any) {
    setNewChickenLegs($event?.target.value);
  }

  function deleteTask(id: any) {
    const taskToDelete = tasks.filter((task: any) => {
      console.log(id);
      return task.id !== id;
    });
    setTasks(taskToDelete);
  }
  const [totalRemaning, setTotalRemaing] = useState(0)
  
  return (
    <>
      <form onSubmit={handleCreateNewTodo} className="newTaskForm">
        <input
          name="content"
          placeholder="Nome"
          value={newTask}
          onChange={handleNewTaskChange}
          type="text"
        />
        <input
          name="chicken"
          placeholder="Frango"
          value={newChicken}
          onChange={handleNewChickenChange}
          type="number"
        />
        <input
          name="beans"
          placeholder="Feijao"
          value={newBeans}
          onChange={handleNewBeansChange}
          type="number"
        />
        <input
          name="salp"
          placeholder="Salpicao"
          value={newSalp}
          onChange={handleNewSalpChange}
          type="number"
        />
        <input
          name="chickenLegs"
          placeholder="Coxa"
          value={newChickenLegs}
          onChange={handleNewChickenLegsChange}
          type="number"
        />
        <button>
          Criar <PlusCircle size={16} />
        </button>
      </form>
      <div>
        {console.log(tasks.length)}
        {tasks.map(
          (val: { id: any; isFinished: any; onDelete: any; title: any;chicken: any;chickenLegs: any;beans: any;salp: any }) => (
            <ToDo
              key={val.id}
              id={val.id}
              isFinished={val.isFinished}
              onDelete={deleteTask}
              title={val.title}
              chicken={val.chicken}
              chickenLegs={val.chickenLegs}
              beans={val.beans}
              salp={val.salp}
            />
          )
        )}
      </div>
    </>
  );
}

export default AddNewTodo;
