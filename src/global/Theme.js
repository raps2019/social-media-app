import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './ThemeStore';

const themes = {
  light: {
    // windowBackgroundColor : "white",
    greenAccentColor: '#CAEEBE',
    blueAccentColor: '#98E2F7',
    orangeAccentColor: '#FEC98F',
    purpleAccentColor: '#cdc1ff',
    errorMessageBackground: '#f8abb3',
    navbarTextColor: '#000000',
  },
  dark: {
    // windowBackgroundColor: "#121212",
    greenAccentColor: '#79D45E',
    blueAccentColor: '#31BFF3',
    orangeAccentColor: '#FFAF68',
    purpleAccentColor: '#a594f9',
    errorMessageBackground: '#E5707E',
    navbarTextColor: '#FFFFFF',
  },
};

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default Theme;
