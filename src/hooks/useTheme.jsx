import { useEffect } from "react";
import { useLocalStorage } from "react-use";

export function useTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "dark", {
    raw: true,
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add(theme);
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  return { theme, toggleTheme };
}
