import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTask, addTask, fetchTasks } from '../redux/tasksSlice';

const TaskList = () => {
  const [newTaskText, setNewTaskText] = useState('');
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTaskText.trim() === '') return;

    const newTask = {
      id: Date.now(),
      title: newTaskText,
      completed: false
    };

    dispatch(addTask(newTask));
    setNewTaskText('');
  };

  const handleChange = (e) => {
    setNewTaskText(e.target.value);
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-white">Lista de Tareas con redux </h1>
      <div className="mb-4">
        <input
          type="text"
          value={newTaskText}
          onChange={handleChange}
          placeholder="Nueva tarea"
          className="border p-2 rounded w-full bg-gray-700 text-white placeholder-gray-400"
        />
        <button
          onClick={handleAddTask}
          className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Añadir Tarea
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-2 border rounded ${
              task.completed ? 'line-through text-gray-400' : 'text-gray-200'
            }`}
          >
            <span
              onClick={() => dispatch(toggleTask(task.id))}
              className="cursor-pointer"
            >
              {task.title}
            </span>
            <button
              onClick={() => dispatch(removeTask(task.id))}
              className="text-red-500 hover:text-red-700 transition"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default TaskList;
