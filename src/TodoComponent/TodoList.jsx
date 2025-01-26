import React, { useState } from 'react';
import "../TodoComponent/TodoList.css"
import TodoInput from '../TodoComponent/TodoInput';
import TodoListBoard from './TodoListBoard';

//  Start function 
function TodoList() {
  const [listTodo, setListTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  let addList = (inputText) => {
    if (inputText !== '') {
      setListTodo([...listTodo, inputText]);
    }
  };
  const deleteListItem = (index) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(index, 1);
    setListTodo(newListTodo);
  };

  const editListItem = (index, newText) => {
    let newListTodo = [...listTodo];
    newListTodo[index] = newText;
    setListTodo(newListTodo);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => (
          <TodoListBoard
            key={i}
            item={listItem}
            index={i}
            deleteItem={deleteListItem}
            setEditIndex={setEditIndex}
            setEditText={setEditText}
            editListItem={editListItem}
            isEditing={editIndex === i}
            editText={editText}
          />
        ))}
      </div>
    </div>
  );
}



// function TodoList() {
//     const [listTodo, setListTodo] = useState([]);

//     let addList = (inputText) => {
//         setListTodo([...listTodo, inputText]);
//     }
// let addList = (inputText) => {
//     const updatedList = listTodo.slice();
//     updatedList.push(inputText); 
//     setListTodo(updatedList); 
// }
//     return (
//         <>  
//             <div className="main-container">
//                 <div className="center-container">
//                     <TodoInput addList={addList} />
//                     <h1 className="app-heading">TODO</h1>
//                     <hr/>
//                     {listTodo.map((listItem, i) => (
//                         <TodoListBoard key={i} item={listItem} />
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

export default TodoList;
