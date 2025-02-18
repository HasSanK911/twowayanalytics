import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import GroupPosts from "./pages/GroupPosts";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/group-posts" element={<MainLayout><GroupPosts /></MainLayout>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
