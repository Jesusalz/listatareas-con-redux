import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task, completed: false }));
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Añadir tarea"
      />
      <button
        type="submit"
        className="w-full mt-2 bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 transition"
      >
        Agregar
      </button>
    </form>
  );
};

export default AddTask;
