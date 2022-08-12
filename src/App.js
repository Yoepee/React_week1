// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
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
  const onRemove = (id) =>{
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const onChange = id =>{
    setTodos(todos.map(
      todo => todo.id === id
      ? {...todo, isDone: !todo.isDone}
      : todo
    ))
  }
  
  
  return (
    <div className="container">
      <div>
        <h1> My Todo List </h1>
      </div>
      <div className="header">
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
            setTodos([...todos, { id: todos.length + 1, title: title, desc: desc, isDone:false}]);
          }}
          >
          추가하기
        </button>
      </div>

      <h1>Working..🔥</h1>
      <div className="work-container">
        {todos.map((todo) => {
          if(todo.isDone == false){
            return( 
            <div className="todo">
            <h1>{todo.title}</h1>
            <p>{todo.desc}</p>
            <div className='btn_set'>
                <button className='del_btn' onClick={()=> onRemove(todo.id)}>
                  삭제하기
                </button>
                <button className='opt_btn' onClick={()=> onChange(todo.id)}>
                  완료
                </button>
            </div>
          </div>
        )}else{
            return null;
          }
        })}
      </div>
      <h1>Done..!🎉</h1>
      <div className="done-container">
      {todos.map((todo) => {
          if(todo.isDone == true){
            return( 
            <div className="todo">
            <h1>{todo.title}</h1>
            <p>{todo.desc}</p>
            <div className='btn_set'>
                <button className='del_btn' onClick={()=> onRemove(todo.id)}>
                  삭제하기
                </button>
                <button className='opt_btn' onClick={()=> onChange(todo.id)}>
                  취소
                </button>
            </div>
          </div>
          )}else{
            return null;
          }
        })}
      </div>
    </div>
    
  );
}


export default App;
