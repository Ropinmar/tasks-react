import React from 'react'
//importar el componente button de antdesign antd
import { Button } from 'antd'
//importar el ToDoList de mis componentes 
import ToDoList from './components/ToDoList/ToDoList'

const App = () => {
  return (
    <div>
      <ToDoList />
    </div>
  )
}

export default App