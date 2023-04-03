import { useContext } from "react";
import TasksContext from "../context/tasks";
import { AiFillDelete } from "react-icons/ai";

function TaskShow({ task }) {
  const { valueToShare } = useContext(TasksContext);

  const handleDeleteClick = () => {
    valueToShare.deleteTaskById(task.id);
  };

  return (
    <div>
      {task.title}

      <button onClick={handleDeleteClick}>
        <AiFillDelete className=" text-red-500 text-lg" />
      </button>
    </div>
  );
}

export default TaskShow;
