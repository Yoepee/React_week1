import React from "react";

import "./style.css";
import Todo from "../todo/Todo";


const List = ({todos,  onChange, onRemove}) =>{
    console.log(todos);
    console.log(onRemove);
    return (
        <div className="list-box">
            <h1>Working..🔥</h1>
            <div className="work-container">
            {todos.map(todo => {
            if(todo.isDone === false){
                return (
                    <Todo todo={todo} onChange={onChange} onRemove={onRemove} key={todo.id}/>
                )
            }else{
                return null;
            }
            })}
            </div>
            <h1>Done..!🎉</h1>
            <div className="work-container">
            {todos.map((todo) => {
            if(todo.isDone === true){
                return (
                    <Todo todo={todo} onChange={onChange} onRemove={onRemove} key={todo.id}/>
                )
            }else{
                return null;
            }
            })}
            </div>
        </div>
    )
}

export default List;