'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    // Cycle through: light -> dark -> system -> light
    const themes: Array<'light' | 'dark' | 'system'> = [
      'light',
      'dark',
      'system',
    ];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-lg bg-light-dark/10 dark:bg-light/10 hover:bg-light-dark/20 dark:hover:bg-light/20 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-light-dark dark:text-light" />
      ) : theme === 'dark' ? (
        <Sun size={20} className="text-light" />
      ) : (
        <Sun size={20} className="text-light-dark dark:text-light" />
      )}
    </button>
  );
}

export function ThemeToggle() {
  return <ThemeToggleButton />;
}
