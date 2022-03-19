import React from 'react';
import { useSelector } from 'react-redux';
import { selectProfile } from './loginSlice';
import styles from './Header.module.css';

const Header = () => {
  const profile = useSelector(selectProfile);
  return (
    <div className={styles.header}>
      <h3>{profile.username}</h3>
      <h1>Today's Task</h1>
    </div>
  );
};

export default Header;
