import React, {createContext, useState} from 'react';
export const themeContext = createContext();
export const ThemeContextProvider = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [theme, setTheme] = useState({
    isLightTheme: true,
    dark: {backgroundColor: 'black', textColor: 'yellow'},
    light: {backgroundColor: 'grey', textColor: 'white'},
  });
  const toggleMode = () =>
    setTheme({
      isLightTheme: !theme.isLightTheme,
      dark: {backgroundColor: 'black', textColor: 'yellow'},
      light: {backgroundColor: 'grey', textColor: 'white'},
    });
  return (
    <themeContext.Provider value={{theme, toggleMode}}>
      {props.children}
    </themeContext.Provider>
  );
};
