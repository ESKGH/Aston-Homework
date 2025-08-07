import React,  { type ReactNode } from 'react';



type MainLayoutProps = {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
};


const MainLayout: React.FC<MainLayoutProps> = ({ header, footer, children }) => {
  return (
     <div className="container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%'}}>
      {header}
      <main style={{ flex: '1 0 auto', padding: '24px' }}>
        {children}
      </main>
      {footer}
    </div>
  );
};

export default MainLayout;