import {createContext, useState, useEffect} from 'react';
export const themes = {
  light: {
    background: 'hsl(0, 0%, 98%)',
    text: 'hsl(200, 15%, 8%)',
    input: 'hsl(0, 0%, 52%)',
  },
  dark: {
    background: 'hsl(207, 26%, 17%)',
    text: 'hsl(0,0%,100%)',
    elements: 'hsl(209, 23%, 22%)',
  },
};

export const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const [isDark, setIsDark] = useState(themes.isDark ?? false);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDark(newTheme === 'light' ? false : true);
  };

  useEffect(() => {
    if (theme === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [theme]);

  const {light, dark} = themes;
  return (
    <DarkModeContext.Provider
      value={{
        light,
        dark,
        isDark,
        toggleTheme,
        theme,
      }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
