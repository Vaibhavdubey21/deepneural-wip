'use client';

import { Moon, Sun } from 'lucide-react';
import Button from './Button';
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
    <Button
      onClick={handleClick}
      className="p-4 rounded-lg hover:scale-110 transition-all text-white duration-300 shadow-none"
    >
      {theme === 'light' ? (
        <Moon size={22} />
      ) : theme === 'dark' ? (
        <Sun size={22} />
      ) : (
        <Sun size={22} />
      )}
    </Button>
  );
}

export function ThemeToggle() {
  return <ThemeToggleButton />;
}
