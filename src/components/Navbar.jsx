import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./LanguageDropdown";

function Navbar() {

    const  {darkMode, toggleTheme} = useContext(ThemeContext);

    const {t, i18n} = useTranslation();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow"> {/* flex items-center justify-between px-6 py-4 bg-white dark:bg-sky-950 shadow */}
            <div className="flex items-center">
                <span className="text-2xl mr-2">🌟</span>
                <span className="font-bold text-lg">Sedanur Kırcı</span>
            </div>
            <div className="flex items-center space-x-4">    
                <button
                    onClick={toggleTheme}
                    className="flex items-center px-3 py-2 rounded-xl border bg-white shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
                >
                    {darkMode ? "🌙" : "☀️"}
                </button>

                <LanguageDropdown />
            </div>
            
        </nav>
    );
}

export default Navbar;