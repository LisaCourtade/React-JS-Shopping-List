import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    function toggleTheme() {
        setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme)
    }
    

    return (
        <ThemeContext.Provider value={{isDarkTheme: isDarkTheme, toggleTheme: toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}