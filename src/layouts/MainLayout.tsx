import { ReactNode, useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaHome, FaUsers, FaLink, FaCogs, FaBars } from "react-icons/fa";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 1200);

  // Handle screen resize and auto-collapse sidebar if width < 1200px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setCollapsed(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Group Posts", path: "/group-posts", icon: <FaUsers /> },
    {
      name: "Link Entities",
      icon: <FaLink />,
      dropdown: [
        { name: "Publications", path: "/publications" },
        { name: "Entities", path: "/entities" },
      ],
    },
    {
      name: "Settings",
      icon: <FaCogs />,
      dropdown: [
        { name: "Entities", path: "/settingsentities" },
        { name: "Attributes", path: "/attributes" },
        { name: "Social Media", path: "/socialmedia" },
      ],
    },
  ];

  return (
    <div className="container-fluid">
    <div style={{ display: "flex", height: "100vh" }} >
      <Sidebar
        collapsed={collapsed}
        style={{
          height: "100%",
          background: "#1A3561",
          color: "#fff",
          width: collapsed ? "80px" : "300px",
        }}
      >
        <Menu>
          <MenuItem
            icon={<FaBars />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              backgroundColor: "#F8FAFC",
              height: "60px",
              borderRight: "1px solid #E2E8F0",
              color: "#6ED5F5",
            }}
          >
            {!collapsed && <img src={logo} alt="Logo" width="100%" />}
          </MenuItem>

          {menuItems.map((item, index) =>
            item.dropdown ? (
              <SubMenu key={index} icon={item.icon} label={!collapsed ? item.name : null}>
                {item.dropdown.map((subItem, subIndex) => (
                  <MenuItem key={subIndex}>
                    <Link
                      to={subItem.path}
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {subItem.name}
                    </Link>
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem key={index} icon={item.icon} component={<Link to={item.path} />}>
                {!collapsed && item.name}
              </MenuItem>
            )
          )}
        </Menu>
      </Sidebar>
      <div style={{ flexGrow: 1 }} className="container-fluid min-h-screen overflow-scroll [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0">
        <Header />
        <main className="p-4 bg-[#f2f3f5] w-full">{children}</main>
      </div>
    </div>

    </div>
  );
};

export default MainLayout;
