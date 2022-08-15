import React from "react";

import "./style.css";
import Todo from "../todo/Todo";


const List = ({todos,  onChange, onRemove}) =>{
    
    return (
        <div className="list-box">
            <h1>Working..🔥</h1>
            <div className="work-container">
            {todos.map(todo => 
            todo.isDone === false
                ?<Todo todo={todo} onChange={onChange} onRemove={onRemove} key={todo.id}/>
                :null
            )}
            </div>
            <h1>Done..!🎉</h1>
            <div className="work-container">
            {todos.map((todo) => 
            todo.isDone === true
                ?<Todo todo={todo} onChange={onChange} onRemove={onRemove} key={todo.id}/>
                :null
            )}
            </div>
        </div>
    )
}

export default List;