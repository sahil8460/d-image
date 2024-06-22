import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={styles.footer} style={{ backgroundColor: theme.footer }}>
      <p>Footer</p>
    </footer>
  );
};

export default Footer;