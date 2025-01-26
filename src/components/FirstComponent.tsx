import React, { useState } from 'react';

const FirsComponent = (props) => {
    const [inputState , setInputState] = useState('new State')
    const [newInputState , setNewInputState] = useState('new State 2')
    
    const handleChange = (event) => {

        console.log(event.target.value)
        setNewInputState(event.target.value)
        // console.log(event)
    }

    return (
        <div>
            <input type='text' value={newInputState} name='input-field' onChange={handleChange}/>
        </div>
    )
}

export default FirsComponent;