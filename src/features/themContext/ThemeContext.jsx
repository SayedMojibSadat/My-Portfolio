import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [themeColor, setThemeColor] = useState(0);

    const changeColor = (hue) => {
        setThemeColor(hue);
    };

    useEffect(() => {
        document.documentElement.style.setProperty('--primary-hue', themeColor);
    }, [themeColor]);

    return (
        <ThemeContext.Provider value={{ themeColor, changeColor }}>
            {children}
        </ThemeContext.Provider>
    );
};