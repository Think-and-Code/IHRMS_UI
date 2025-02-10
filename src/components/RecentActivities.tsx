import React, { useState } from "react";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>(
    [],
  );
  const [newTask, setNewTask] = useState<string>("");
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleRemoveTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task,
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="mt-8 bg-violet-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold text-gray-800">Todo List</h2>

      <div className="mt-4 space-y-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 text-black"
        />
        <button
          onClick={handleAddTask}
          className="w-full py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600"
        >
          Add Task
        </button>
      </div>

      <ul className="mt-6 space-y-3">
        {tasks.length === 0 ? (
          <li className="text-sm text-gray-600">No tasks yet. Add one!</li>
        ) : (
          tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center text-sm ${
                task.completed ? "text-gray-400 line-through" : "text-gray-600"
              }`}
            >
              <span>{task.text}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleToggleComplete(index)}
                  className="text-green-500 hover:text-green-700"
                >
                  {task.completed ? "Undo" : "Mark as Complete"}
                </button>
                <button
                  onClick={() => handleRemoveTask(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
