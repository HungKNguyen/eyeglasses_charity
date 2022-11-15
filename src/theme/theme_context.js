import React from "react";

export const themes = {
    light: {
        primary: '#1565c0',
        primary_light: '#5e92f3',
        primary_dark: '#003c8f',
        secondary: '#4caf50',
        secondary_light: '#80e27e',
        secondary_dark: '#087f23',
        background: '#f5f5f5',
        background_highlight: '#e1e1e1',
        text_light: '#ffffff',
        text_dark: '#000000',
        text_gray: '#616161'
    }
};

export const ThemeContext = React.createContext(
    themes.light
);
