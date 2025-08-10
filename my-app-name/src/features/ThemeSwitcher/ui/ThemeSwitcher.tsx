import  useTheme from '../../../shared/lib/theme/UseTheme.ts';
import  Button  from '../../../shared/ui/Button/Button.tsx';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} aria-label="Переключить тему">
      {theme === 'light' ? 'Light' : 'Dark'}
    </Button>
  );
};