import React, {useState} from "react";

import Layout from "../components/layout/Layout"

function TodoList(){
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
            <Layout todos = {todos} onChange={onChange} onRemove={onRemove} addTodo={addTodo}/>
        </>
    )
}

export default TodoList;