import React, { useState } from 'react';
import '../TodoComponent/TodoInput.css'


function TodoInput(props) {
  const [inputText, setInputText] = useState('');

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText('');
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        maxLength={40}
        className="inputBox-Top"
        placeholder="Chal Bhai Enter kar List"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <button
        className="AddBtn"
        onClick={() => {
          props.addList(inputText);
          setInputText('');
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
