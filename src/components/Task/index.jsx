import React from 'react'
// importamos el card de la libreria 
import { Card } from 'antd';
//imporatmos el icono de la lobreria de antd
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
// importamos los estilos de ese componente, aunque se llame igual que otros stilos
import "./styles.css";

const Task = (props) => {
  // este props es la task que pusimos en el ToDoList 
  const { tarea, actualizarTarea } = props;
  const { name, description, _id, isDone } = tarea;

  return (
        // aca ponemos el card que importamos de la libreria 
        // con las prop que dice en la libreria que pueden ser un html u otro componente 
    <Card 
      title={name}
      style={{
          width: 300,
        }}
    >
      <p>
        {_id } - {description}
      </p>
          {/* operador ternario --> condicion ? verdadero : falso */}
        { isDone ? (
          <CheckOutlined style={{color: "#0f0", fontSize: "24px"}} onClick={() => actualizarTarea(_id)}/>
          ) : (
            <CloseOutlined className="close" onClick={() => actualizarTarea(_id)}/>
        )} {/* ya pusimos los componentes que habiamos puesto mas abajo de los comentarios dentro de { isDone } */}
          
          
          {/* aca ponemos los componentes ya  importamos de la libreria para usarlos */}
          {/* podemos modificar estilos en linea, los ponemos dentro de dos llaves {{}} */}
      
      
    </Card>
  );
};

export default Task;