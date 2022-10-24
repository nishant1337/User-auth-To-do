import Task from "./Task";
const CompletedTask = ({ tasks, setTasks, onDelete, updateStatus }) => {
  const handleSubmit = (e) => {
    setTasks(tasks.filter((task) => task.status == 0));
  };

  return (
    <>
      <span id="typetitle">
        Completed Tasks
        <button className="rmbtn" onClick={handleSubmit}>
          🗑️
        </button>
      </span>

      {tasks
        .filter((item) => item.status == true)
        .map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            status={task.status}
            onDelete={onDelete}
            updateStatus={updateStatus}
          />
        ))}
    </>
  );
};

export default CompletedTask;
