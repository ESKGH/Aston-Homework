import React,  { type ReactNode } from 'react';
import styles from './MainLayout.module.css';
import  useTheme from '../lib/theme/UseTheme.ts'; 

type MainLayoutProps = {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
};



const MainLayout: React.FC<MainLayoutProps> = ({ header, footer, children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}
      data-theme={theme}
    >
      {header}
      <main style={{ flex: '1 0 auto', padding: '24px' }}>
        {children}
      </main>
      {footer}
    </div>
  );
};

export default MainLayout;