import React from 'react';

function TodoListBoard(props) {
  const { item, index, deleteItem, setEditIndex, setEditText, editListItem, isEditing, editText } = props;

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleSaveEdit = () => {
    editListItem(index, editText);
  };

  return (
    <ul>
      <li className="list-item">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={handleEditChange}
            onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit()}
            className="edit-input"
          />
        ) : (
          item
        )}

        <span className="icons">
          <i
            className="fa-regular fa-trash-can"
            onClick={() => deleteItem(index)}
          ></i>
        </span>

        <span className="icons">
          {!isEditing ? (
            <i
              className="fa-regular fa-pen-to-square"
              onClick={() => {
                setEditIndex(index);  
                setEditText(item);  
              }}

            ></i>
          ) : (
            <i
              className="fa-regular fa-check"
              onClick={handleSaveEdit}
            ></i>
          )}
        </span>
      </li>
    </ul>
  );
}


export default TodoListBoard;
