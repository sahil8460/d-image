import React, { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip'
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const tooltipText = `Switch to ${theme.name === 'light' ? 'Dark' : 'Light'} Theme`;

  return (
    <header className={styles.header} style={{ backgroundColor: theme.header }}>
      <h1>Header</h1>
      <div onClick={toggleTheme} className={styles.button} id="themeButton">
        {theme.name === 'light' ? <FaMoon /> : <FaSun />}
      </div>
      <Tooltip anchorSelect="#themeButton" place="bottom">
        {tooltipText}
      </Tooltip>
    </header>
  );
};

export default Header;