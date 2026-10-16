import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark",
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => {
        const nextIsDarkMode = !isDarkMode;
        localStorage.setItem("theme", nextIsDarkMode ? "dark" : "light");
        setIsDarkMode(nextIsDarkMode);
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDarkMode}
            className="rounded-full bg-gray-200 p-2 transition-colors duration-300 dark:bg-gray-800"
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-300" />
            )}
        </button>
    );
};