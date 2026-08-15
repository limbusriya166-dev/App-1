import React from "react";
import TaskCard from "./TaskCard";

function TaskList({ title, tasks, toggleTask }) {
  return (
    <div className="task-section">
      <h2>{title}</h2>

      {tasks.length === 0 ? (
        <p className="empty-message">No tasks here.</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            toggleTask={toggleTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
