import { useState, useContext } from "react";
import TasksContext from "../context/tasks";

function AddTask() {
  const [title, setTitle] = useState("");

  const { valueToShare } = useContext(TasksContext);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    valueToShare.createTask(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Create A New Task</label>
        <div className="flex justify-between items-center ">
          <input
            value={title}
            onChange={handleChange}
            className=" border border-solid border-black rounded-md outline-0 text-black"
          ></input>
          <button className="text-blue-500 text-3xl  pb-2 ">+</button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
