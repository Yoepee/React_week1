import React, {useState} from "react";
import List from "../list/List";
import "./style.css";

const Form = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

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
      </>
    );
}

export default Form;