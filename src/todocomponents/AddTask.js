import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [titletext, setTitletext] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!titletext) {
      alert("Add something");
      return;
    }

    addTask(titletext);
  };
  return (
    <>
  
      <form className="add-form" onSubmit={onSubmit}>
        <div className="todo-form-control">
          <label>Task Title : </label><> </>
          <input
            type="text"
            value={titletext}
            onChange={(e) => setTitletext(e.target.value)}
            placeholder="Add Task"
          ></input>
        </div>
        <input type="submit" value="Save" className="btn btn-block"></input>
      </form>
      <br />
    </>
  );
};

export default AddTask;
