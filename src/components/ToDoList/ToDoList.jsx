import React, { useState } from 'react'
import Task from '../Task'
import "./styles.css"

const initialTasks = [
    {
      _id: "1a",
      name: "Task1",
      description: "Do something important",
      isDone: false,
    },
    {
      _id: "2b",
      name: "Task2",
      description: "Do something important",
      isDone: false,
    },
    {
      _id: "3c",
      name: "Task3",
      description: "Do something important",
      isDone: false,
    },
];


const ToDoList = () => {
    // aca ponemos el estado que primero debi haberlo importado al lado de React entre {}
    const [tasks, setTasks] = useState(initialTasks)
    // creamos el telefono para comunicarse entre ToDolist y cada Task
    const actualizarTarea = (elId) => {
        // console.log("actualizar", elId);
        // cuando quiera actualizar un arreglo de objetos 
        // 1. hacemo suna copia del arreglo usando -> [...nombreArreglo]
        const cpTasks = [...tasks];
        // console.log(cpTasks);
        // ya que tenemos la copia puedo modificarlo
        //2. modificamos el arreglo, con map como ejemplo
        const newTasks = cpTasks.map((tarea) => {
            // console.log(tarea);
            if(tarea._id === elId){
                tarea.isDone = !tarea.isDone;
            }
            return tarea
        });
        setTasks(newTasks);
    };

    const tareasCompletadas = () => {
        console.log("Cuentate");
        //filter recorre el arreglo y regresa un nuevo arreglo 
        const completadas = tasks.filter((tarea) => tarea.isDone)
        console.log(completadas);
        return completadas.length;
    }

  return (
    <div>
        <p>
            ToDoList <strong>{tareasCompletadas()}/{tasks.length}</strong> {/*aca donde esta tasks.length y mas abajo, antes estaba el initialTasks */}
        </p>
        {/* usamos .map para recorrer un array */}
        <div className="renglon">
            {tasks.map((task) => {
                {/* ponemos la key para el .map que es el mismo id que viene en el arreglo initialTasks */}
                return <Task key={task._id} tarea={task} actualizarTarea={actualizarTarea}/>; 
                {/* este task que tengo dentro de las llaves va a ser las props que pongo en el componente */}
            })}
        </div>
    </div>
  )
}

export default ToDoList