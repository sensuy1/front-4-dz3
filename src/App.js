import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask])
      setNewTask("")
    }
  }

  return (
    <>
      <div style={{ width: 500, margin: "0px auto", marginTop: 100 }}>
        <div>
          <span>Туду-лист</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <input
            placeholder="Do....."
            style={{ width: 425, height: 30 }}
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Create</button>
        </div>

        <div>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
export default TodoApp;