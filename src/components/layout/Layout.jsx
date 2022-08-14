import React from "react";

import './style.css'
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";

function Layout({todos, onChange, onRemove, addTodo}){
    return(
        <div className="layout">
            <Header/>
            <Form addTodo={addTodo}/>
            <List todos = {todos} onChange={onChange} onRemove={onRemove}/>
        </div>
    )
}

export default Layout;