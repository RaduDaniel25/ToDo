import { createContext, useState, useCallback } from "react";
import axios from "axios";
const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const fetchTasks = useCallback(async () => {
    const response = await axios.get("http://localhost:3005/tasks");
    setTasks(response.data);
  }, []);

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3005/tasks/${id}`);

    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  };

  const createTask = async (title) => {
    const response = await axios.post("http://localhost:3005/tasks", {
      title,
    });
    const updatedTasks = [...tasks, response.data];
    setTasks(updatedTasks);
  };
  const valueToShare = {
    tasks,
    deleteTaskById,
    createTask,
    fetchTasks,
  };
  return (
    <TasksContext.Provider value={{ valueToShare }}>
      {children}
    </TasksContext.Provider>
  );
}
export { Provider };
export default TasksContext;
