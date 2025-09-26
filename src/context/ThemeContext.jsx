import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(prev => !prev);
        document.documentElement.classList.toggle("dark");
    }


    // useEffect(() => {
    //     if (darkMode) {
    //         document.documentElement.classList.add("dark");
    //         localStorage.setItem("theme", "dark");
    //     } else {
    //         document.documentElement.classList.remove("dark");
    //         localStorage.setItem("theme", "light");
    //     }
    // }, [darkMode]);

    // const toggleTheme = () => setDarkMode((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}