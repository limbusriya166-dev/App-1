import React from "react";

function TaskCard({ task, toggleTask }) {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <span>{task.title}</span>

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
    </div>
  );
}

export default TaskCard;