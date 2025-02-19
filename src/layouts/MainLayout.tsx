import React, { useState, useEffect, ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1020);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1020);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 1020;
      setIsMobile(mobileView);
      if (mobileView) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="main-layout flex h-screen relative">
      <Sidebar isOpen={isSidebarOpen} isMobile={isMobile} />
      {isSidebarOpen && isMobile && (
        <div
          className="fixed inset-0  bg-opacity-50 z-20"
          onClick={toggleSidebar}
        ></div>
      )}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 bg-[#f2f3f5] ${
          isSidebarOpen && !isMobile ? "ml-[300px]" : "ml-0"
        }`}
      >
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-4 bg-[#f2f3f5] w-full">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
