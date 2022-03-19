import React from 'react';
import { useDispatch } from 'react-redux';

import { BsTrash } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';

import { selectTask, editTask, fetchAsyncDelete } from './taskSlice';

import styles from './TaskItem.module.css';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.listItem}>
      <span className={styles.cursor} onClick={() => dispatch(selectTask(task))}>
        {task.title}
      </span>
      <div>
        <button onClick={() => dispatch(fetchAsyncDelete(task.id))}>
          <BsTrash />
        </button>
        <button onClick={() => dispatch(editTask(task.id))}>
          <FaEdit />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
