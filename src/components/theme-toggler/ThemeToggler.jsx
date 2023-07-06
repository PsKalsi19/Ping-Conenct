import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(AuthContext);
  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? (
        <SunIcon title="Light Theme" className="w-6 h-6 text-orange-400" />
      ) : (
        <MoonIcon title="Dark Theme" className="w-6 h-6 text-sky-950" />
      )}
    </button>
  );
};

export default ThemeToggler;
