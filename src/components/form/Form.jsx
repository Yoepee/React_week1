import React, {useState} from "react";
import List from "../list/List";
import "./style.css";

const Form = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "리액트 공부하기",
            desc: "리액트 기초를 공부해봅시다.",
            isDone: false
        },
        {
            id: 2,
            title: "리액트 공부하기",
            desc: "리액트 기초를 공부해봅시다.",
            isDone: true
        },
    ]);
    const onRemove = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const onChange = (id) => {
        setTodos(todos.map(
            todo => todo.id === id
                ? { ...todo, isDone: !todo.isDone }
                : todo
        ))
    }
    console.log(onchange, onRemove);

    const addTodo = (title, desc) =>{
        const todo ={
            id: todos.length+1,
            title:title,
            desc:desc,
            isDone:false
        }
        setTodos([...todos, todo]);
    }
    return (
        <>
        <div className="form-box">
        <label>
          제목
          <input className='input' type="text" value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </label>
        <label>
          내용
          <input className='input' type="text" value={desc}
            onChange={(event) => {
              setDesc(event.target.value);
            }}
          />
        </label>
        <button
         className='int_btn'
         onClick={() => 
          {
            addTodo(title, desc);
          }}
          >
          추가하기
        </button>
      </div>
      <List todos = {todos} onChange={onChange} onRemove={onRemove}/>
      </>
    );
}

export default Form;