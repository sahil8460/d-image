import React, { useContext, useState } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip'
import styles from './Header.module.scss';
import dynamic from 'next/dynamic';
const TimeInput = dynamic(
  () => import('@/components/TimeInput'),
  { ssr: false }
);

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const tooltipText = `Switch to ${theme.name === 'light' ? 'Dark' : 'Light'} Theme`;
  return (
    <header className={styles.header} style={{ backgroundColor: theme.header }}>
      <h1>Header</h1>
      <div className='flex gap-3 items-center'>
        <TimeInput />
        <div onClick={toggleTheme} className={styles.button} id="themeButton">
          {theme.name === 'light' ? <FaMoon /> : <FaSun />}
        </div>
      </div>
      <Tooltip anchorSelect="#themeButton" place="bottom">
        {tooltipText}
      </Tooltip>
    </header>
  );
};

export default Header;