import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar'; 

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    
    <div className="main-layout flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
