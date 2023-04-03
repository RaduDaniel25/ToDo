import TaskCreate from "./components/TaskCreate";
import TasksList from "./components/TasksList";
import TasksContext from "./context/tasks";
import { useEffect, useContext } from "react";

function App() {
  const { valueToShare } = useContext(TasksContext);
  useEffect(() => {
    valueToShare.fetchTasks();
  }, [valueToShare.fetchTasks]);

  const stil = { width: "35%" };
  return (
    <div className="flex flex-col justify-center items-center ">
      <div
        style={stil}
        className=" flex flex-col justify-between items-center pb-9 pt-5 text-white text-xl bg-green-600 border rounded-3xl"
      >
        <div>ToDo App</div>
        <TaskCreate />
        <TasksList />
      </div>
    </div>
  );
}
export default App;
