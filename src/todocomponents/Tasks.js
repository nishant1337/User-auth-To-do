import Task from "./Task";
const Tasks = ({ tasks, onDelete, updateStatus }) => {
  return (
    <>
      <span id="typetitle">All Tasks</span>
      {tasks.map((task) => (
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

export default Tasks;
