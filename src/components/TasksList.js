import { useContext } from "react";
import TasksContext from "../context/tasks";
import TasksShow from "./TaskShow";

function TasksList() {
  const { valueToShare } = useContext(TasksContext);
  const renderTasks = valueToShare.tasks.map((task) => {
    return <TasksShow key={task.id} task={task} />;
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Your Tasks</h1>

      <div>{renderTasks}</div>
    </div>
  );
}
export default TasksList;
