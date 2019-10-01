import React from "react";

export const themes = {
  light: {
    name: 'Light',
    color: '#000000',
    background: '#eeeeee'
  },
  dark: {
    name: 'Dark',
    color: '#ffffff',
    background: '#222222'
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
