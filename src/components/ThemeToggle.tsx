import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="p-2 rounded-md border border-term-border-l dark:border-term-border hover:bg-term-bg-l dark:hover:bg-term-bg transition-colors text-term-text-l dark:text-term-text"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
