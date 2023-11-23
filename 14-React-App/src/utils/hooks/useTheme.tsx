import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newValue = theme === "dark" ? "light" : "dark";
    setTheme(newValue);
  };

  return [toggleTheme];
}

export default useTheme;
