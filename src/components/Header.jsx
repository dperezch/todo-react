import { useState,useEffect } from "react";
import MoonIcon from "./icons/IconMoon";
import SunIcon from "./icons/IconSun"


const Header = () => {

  const inicialStateDarkMode = localStorage.getItem('theme') === 'dark';

  const [darkMode, setDarkMode] = useState(inicialStateDarkMode)

  useEffect(() => {
    console.log('useEffect');
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light')
    }
    
  }, [darkMode])
  

  return (
    <header className="container mx-auto px-4 pt-8 md:max-w-xl">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold uppercase tracking-[0.3em] text-white">
          Todo
        </h1>
        <button onClick={()=> setDarkMode(!darkMode)}>
          {
            darkMode ? <SunIcon /> : <MoonIcon />
          }
          
          {/* className="fill-red-500" */}
        </button>
      </div>
    </header>
  );
};

export default Header;
