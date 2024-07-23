import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="whitespace-nowrap rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 font-medium text-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </motion.button>
  );
};
