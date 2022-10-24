import React from 'react'
import { useState } from "react";

const SearchTask = ({tasks, setfoundTasks}) => {
    const [searchText, setsearchText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
    
        setfoundTasks(tasks.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase())))
    
      };


    return (
        <form className="add-form" onSubmit={onSubmit}>
          <div className="todo-form-control">
          <label>Search Task : </label><> </>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
              placeholder="Enter Task Details"
            ></input>
          </div>
          <input type="submit" value="Search" className="btn btn-block"></input>
        </form>
      );
    };
export default SearchTask