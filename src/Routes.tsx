import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import GroupPosts from "./pages/GroupPosts";
import Publications from "./pages/Publications";
import Entities from "./pages/Entities";
import SettingsEntities from "./pages/SettingsEntities";
import Attributes from "./pages/Attributes";
import Socialmedia from "./pages/Socialmedia";
import EntitiesRelatedtoPublication from "./pages/entitiesrelatedtopublication";
import LinkEntitiesToPost from "./pages/linkentitiestopost";
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/group-posts" element={<MainLayout><GroupPosts /></MainLayout>} />
        <Route path="/publications" element={<MainLayout><Publications /></MainLayout>} />
        <Route path="/entities" element={<MainLayout><Entities /></MainLayout>} />
        <Route path="/settingsentities" element={<MainLayout><SettingsEntities /></MainLayout>} />
        <Route path="/attributes" element={<MainLayout><Attributes /></MainLayout>} />
        <Route path="/socialmedia" element={<MainLayout><Socialmedia /></MainLayout>} />
        <Route path="/entitiesrelatedtopublication" element={<MainLayout><EntitiesRelatedtoPublication/></MainLayout>}/>
        <Route path="/linkentitiestopost" element={<MainLayout><LinkEntitiesToPost/></MainLayout>}/>






      </Routes>
    </Router>
  );
};

export default AppRoutes;
