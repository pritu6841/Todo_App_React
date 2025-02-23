import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";


function AppInput({ onNewItem }) {
  const [todoName, setTodoName] = useState()
  const [todoDate, setTodoDate] = useState()
  const handleName = (e) => {
    setTodoName(e.target.value)
  }
  const handleDate = (e) => {
    setTodoDate(e.target.value)
  }
  const changeValue = () => {
    onNewItem(todoName, todoDate)
    setTodoName("")
    setTodoDate("")
  }

  return <div class="container text-center">
    <div class="row">
      <div class="col-6">
        <input type="text" placeholder='Enter todo here' onChange={handleName} value={todoName} />
      </div>
      <div class="col-4">
        <input type="date" onChange={handleDate} value={todoDate} />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success" onClick={() => changeValue(todoName, todoDate)}><IoIosAddCircle />
        </button>
      </div>
    </div>
  </div>
}
export default AppInput;