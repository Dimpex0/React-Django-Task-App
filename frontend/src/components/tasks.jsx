import React, { useContext, useEffect, useState } from "react";
import DeleteIcon from "../images/delete_icon.png";
import { FetchContext } from "../contexts/FetchContext";
import axios from "axios";

function Tasks() {
  const { active, setActive } = useContext(FetchContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (active) {
      axios.get("http://127.0.0.1:8000/tasks/").then((res) => {
        setTasks(res.data);
        setActive(false);
      });
    }
  }, [active]);

  function deleteTask(id) {
    axios.delete(`http://127.0.0.1:8000/tasks/delete/${id}/`).then((res) => {
      setActive(true);
    });
  }

  function handleTaskStatus(e, id) {
    let setStatus;

    if (e.target.checked) {
      setStatus = true;
    } else {
      setStatus = false;
    }

    axios
      .patch(`http://127.0.0.1:8000/tasks/update/${id}/`, {
        complete: setStatus,
      })
      .then((res) => {
        setActive(true);
      });
  }

  return (
    <div className="Tasks">
      <h1>Task App</h1>
      <div className="tasks-container">
        {tasks &&
          tasks.map((task) => (
            <div key={task.id} className="task">
              <input
                onChange={(e) => handleTaskStatus(e, task.id)}
                checked={task.complete}
                type="checkbox"
              />
              <div className="info">
                <p className="title">{task.title}</p>
                <p className="description">{task.description}</p>
              </div>
              <img
                onClick={() => deleteTask(task.id)}
                src={DeleteIcon}
                alt=""
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Tasks;
