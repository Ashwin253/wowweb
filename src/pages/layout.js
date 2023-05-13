import { useEffect, useState } from "react";
import { useTheme } from "next-themes";


const Layout = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="flex justify-end items-center h-12 px-4 bg-gray-100 dark:bg-gray-800">
        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 rounded-full w-12 h-6 transition"
        >
          <div
            className={`bg-white dark:bg-gray-200 shadow-md rounded-full w-6 h-6 transform transition duration-300 ${
              theme === "dark" ? "translate-x-6" : ""
            }`}
          />
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
};

export default Layout;
