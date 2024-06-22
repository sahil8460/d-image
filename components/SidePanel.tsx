import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from './SidePanel.module.scss';

const SidePanel: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <aside className={styles.sidePanel} style={{ backgroundColor: theme.sidebar }}>
      <ul className={styles.list}>
        <li className={styles.item}>Link 1</li>
        <li className={styles.item}>Link 2</li>
        <li className={styles.item}>Link 3</li>
      </ul>
    </aside>
  );
};

export default SidePanel;