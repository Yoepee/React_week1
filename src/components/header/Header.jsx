import React from "react";

import "./style.css";

const Header = () =>{
    return(
        <header className="header">
            <div className="content">
                <h1>My Todo List</h1>
                <nav>
                    <p>김동엽</p>
                </nav>
            </div>
        </header>
    )
}

export default Header;