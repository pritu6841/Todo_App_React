import Element from "./Element";
import { useContext } from "react";
import { todoListContext } from '../store/Context';


function AppElement({ onDelete }) {
  const { todoList } = useContext(todoListContext)
  return (
    <div className="container text-center">
      <div className="row">
        <Element todoList={todoList} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default AppElement;
