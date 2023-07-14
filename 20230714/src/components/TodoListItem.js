import React from "react";
import{
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = () =>{
    return(
        <div class="TodoListItem">
            <div class="checkbox">
                <MdCheckBoxOutlineBlank/>
                <div class="text">할 일</div>
                
            </div>
            <div className="remove">
                <MdRemoveCircleOutline/>
            </div>
            </div>
    );
};

export default TodoListItem;