import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTasks } from '../redux/tasksSlice';

const TaskLoader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        
       
        const limitedData = data.slice(0, 25);
        
        
        dispatch(setTasks(limitedData));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [dispatch]);

  return null; 
};

export default TaskLoader;
