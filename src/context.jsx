import { createContext, useState, useEffect } from "react";



export const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [mode, setMode] = useState(
    ()=> {return localStorage.getItem("mode") || "dark";})
  const [lang, setLang] = useState("en");
const [active, setactive] = useState(
  () => localStorage.getItem("act") || "About"
);
  

  useEffect(() => {
    
    localStorage.setItem("act",active)
  }, [active]);
  // عند أول تحميل


  useEffect(() => {
    const root = document.documentElement;

    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("mode", mode);
    localStorage.setItem("lang", lang);
  }, [mode, lang]);

  return (
    <ModeContext.Provider value={{ mode, setMode, lang, setLang, active, setactive }}>
      {children}
    </ModeContext.Provider>
  );
}
