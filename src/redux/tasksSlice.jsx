import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: []
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    }
  }
});

export const { setTasks, addTask, removeTask, toggleTask } = tasksSlice.actions;

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch(setTasks(response.data));
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

export default tasksSlice.reducer;
