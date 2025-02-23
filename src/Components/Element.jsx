const Element = ({ todoList, onDelete }) => {
  return (
    <>
      {todoList.map(list => (
        <div key={list.name} className="row">
          <div className="col-6">{list.name}</div>
          <div className="col-4">{list.date}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger" onClick={() => onDelete(list.name)}> Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Element;
