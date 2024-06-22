import React, { createContext, useState, useEffect } from 'react';

type Theme = {
  name: string;
  body: string;
  text: string;
  header: string;
  footer: string;
  sidebar: string;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const lightTheme: Theme = {
  name: 'light',
  body: '#ffc0cb', // Pinkish background
  text: '#000000', // Black text
  header: '#ff69b4', // Deep pink header
  footer: '#ff69b4', // Deep pink footer
  sidebar: '#ffb6c1', // Light pink sidebar
};

const darkTheme: Theme = {
  name: 'dark',
  body: '#121212',
  text: '#ffffff',
  header: '#333333',
  footer: '#333333',
  sidebar: '#2e2e2e',
};

export const ThemeContext = createContext<ThemeContextType>({ theme: lightTheme, toggleTheme: () => {} });

export const ThemeProvider: React.FC = ({ children }: any) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.name === 'light' ? darkTheme : lightTheme);
  };

  useEffect(() => {
    if (theme.name === 'light') {
      document.body.style.backgroundColor = lightTheme.body;
      document.body.style.color = lightTheme.text;
    } else {
      document.body.style.backgroundColor = darkTheme.body;
      document.body.style.color = darkTheme.text;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};