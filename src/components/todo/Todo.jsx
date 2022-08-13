import React from "react";

import "./style.css";


const Todo = ({todo, onChange, onRemove}) =>{
    return (
        <>
            <div className="todo" key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.desc}</p>
            <div className='btn_set'>
                <button className='del_btn' onClick={()=> onRemove(todo.id)}>
                  삭제하기
                </button>
                { todo.isDone === false
                ?<button className='opt_btn' onClick={()=> onChange(todo.id)}>완료</button>
                :<button className='opt_btn' onClick={()=> onChange(todo.id)}>취소</button>
              }
            </div>
          </div>
        </>
    )
}

export default Todo;