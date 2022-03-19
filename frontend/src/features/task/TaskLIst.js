import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAsyncProf } from '../login/loginSlice';
import { selectTasks, fetchAsyncGet } from './taskSlice';
import TaskItem from './TaskItem';
import styles from './TaskList.module.css';

const TaskLIst = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTaskProf = async () => {
      await dispatch(fetchAsyncGet());
      await dispatch(fetchAsyncProf());
    };
    fetchTaskProf();
  }, [dispatch]);

  return (
    <div>
      <ul className={styles.TaskList}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskLIst;
