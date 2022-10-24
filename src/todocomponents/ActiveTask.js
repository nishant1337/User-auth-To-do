import Task from "./Task";
const ActiveTask = ({ tasks, onDelete, updateStatus }) => {
  return (
    <>
      <span id="typetitle">Active Tasks</span>

      {tasks
        .filter((item) => item.status == false)
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

export default ActiveTask;
