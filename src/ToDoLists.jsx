import React  from "react";

const ToDoLists = (props) => {

 
    return (
        <>
            <div className="todo_style"> 
                <li className="fa fa-times" aria-hidden="true"
                // callback function
                onClick={() => {
                    props.onSelect(props.id);
                }} />
                <li>{props.text} </li>
            </div>
        </>
        );
};
export default ToDoLists;