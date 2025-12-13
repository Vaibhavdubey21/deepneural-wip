'use client';

import { Moon, Sun } from 'lucide-react';
import Button from './Button';
import { useTheme } from './ThemeProvider';

function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    const themes: Array<'light' | 'dark'> = ['light', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <Button
      onClick={handleClick}
      className="p-4 rounded-lg hover:scale-110 transition-all text-black dark:text-white duration-300 shadow-none bg-transparent"
    >
      {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
    </Button>
  );
}

export function ThemeToggle() {
  return <ThemeToggleButton />;
}
