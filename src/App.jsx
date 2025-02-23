import { useState } from 'react'
import AppNAme from './Components/AppNAme'
import AppInput from './Components/AppInput'
import AppElement from './Components/AppElement'
import WelcomeMessage from './Components/WelcomeMessage'
import { todoListContext } from './store/Context'
import './App.css';

function App() {
  let initialTodoList = [
  ]

  const [todoList, setTodoList] = useState(initialTodoList);
  const handleNewItem = (todoName, todoDate) => {
    const newItem = [...todoList, { name: todoName, date: todoDate }]
    setTodoList(newItem)
  }

  const handleDeleteButton = (todoName) => {
    const newItemList = todoList.filter((list) => list.name !== todoName)
    setTodoList(newItemList)
    console.log(`target to be deleted : ${todoName}`)
  }
  return (
    <>
      <todoListContext.Provider value={{ todoList, setTodoList }}>
        <center>
          <AppNAme></AppNAme>
          <AppInput onNewItem={handleNewItem}></AppInput>
          {todoList.length === 0 && <WelcomeMessage></WelcomeMessage>}
          <AppElement onDelete={handleDeleteButton}></AppElement>
        </center>
      </todoListContext.Provider>
    </>
  )
}

export default App
