import Task from "./Task";
const  Tasks = ({ tasksArr, onDelete, onToggle }) => {
  return (
    <>
      {tasksArr.map((taskMap, index) => (
        <Task key={index}
              task={taskMap}
              onDelete={onDelete} 
              onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
