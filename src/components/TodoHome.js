import Header from "../todocomponents/Header";
import Tasks from "../todocomponents/Tasks";
import CompletedTask from "../todocomponents/CompletedTask";
import ActiveTask from "../todocomponents/ActiveTask";
import AddTask from "../todocomponents/AddTask";
import SearchTask from "../todocomponents/SearchTask";
import { useState } from "react";
import "../todo.css";

function TodoHome() {
  
    const [tasks, setTasks] = useState([
      {
        id: 1,
        title: "Complete Assignment 2",
        status: true,
      },
      {
        id: 2,
        title: "Visit Detroit",
        status: false,
      },
      {
        id: 3,
        title: "Hit Gym",
        status: true,
      },
    ]);
    const [foundTasks, setfoundTasks] = useState([]);
    console.log(foundTasks);
    const addTask = (title) => {
      const id = Math.floor(Math.random() * 10000) + 1;
      const status = false;
      const newtask = { id, title, status };
      setTasks([...tasks, newtask]);
    };
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    };
  
    const updateStatus = (id) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, status: !task.status } : task
        )
      );
    };
  
    return (
      <>
        <div className="add_container">
          <AddTask addTask={addTask} />
          <br/>
        </div>
  
        <div className="search_container">
          <SearchTask tasks={tasks} setfoundTasks={setfoundTasks} />
        </div>
  
        {foundTasks.length == 0 ? (
          <div className="Orignal">
            <div className="todo_container">
              <div className="task_container">
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    updateStatus={updateStatus}
                    onDelete={deleteTask}
                  />
                ) : (
                  "No tasks "
                )}
              </div>
  
              <div className="task_container">
                {tasks.length > 0 ? (
                  <ActiveTask
                    tasks={tasks}
                    updateStatus={updateStatus}
                    onDelete={deleteTask}
                  />
                ) : (
                  "No Active tasks "
                )}
              </div>
  
              <div className="task_container">
                {tasks.length > 0 ? (
                  <CompletedTask
                    tasks={tasks}
                    setTasks={setTasks}
                    updateStatus={updateStatus}
                    onDelete={deleteTask}
                  />
                ) : (
                  "No Completed tasks "
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="Orignal">
            <div className="todo_container">
              <div className="task_container">
                {foundTasks.length > 0 ? (
                  <Tasks
                    tasks={foundTasks}
                    updateStatus={updateStatus}
                    onDelete={deleteTask}
                  />
                ) : (
                  "No tasks "
                )}
              </div>
  
              <div className="task_container">
                {foundTasks.length > 0 ? (
                  <ActiveTask
                    tasks={foundTasks}
                    updateStatus={updateStatus}
                    onDelete={deleteTask}
                  />
                ) : (
                  "No Active tasks "
                )}
              </div>
  
              <div className="task_container">
                {foundTasks.length > 0 ? (
                  <CompletedTask
                    tasks={foundTasks}
                    setTasks={setTasks}
                    updateStatus={updateStatus}
                    onDelete={deleteTask}
                  />
                ) : (
                  "No Completed tasks "
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default TodoHome;
  