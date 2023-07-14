import React from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert =() => {
    
    return(
        <form class="TodoInsert">
            <input placeholder='할 일을 입력하슈'>
            </input>
            <button type = 'submit'>
                <MdAdd/>
            </button>
        </form>
    );

};

export default TodoInsert;