import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Add new task
  const addTask = (taskTitle) => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  // Complete/uncomplete task
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List</h1>

        <TaskForm addTask={addTask} />

        <TaskList
          title="Pending"
          tasks={pendingTasks}
          toggleTask={toggleTask}
        />

        <TaskList
          title="Completed"
          tasks={completedTasks}
          toggleTask={toggleTask}
        />
      </div>
    </div>
  );
}

export default App;