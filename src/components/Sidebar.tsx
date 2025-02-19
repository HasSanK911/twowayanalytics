import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import home from '../assets/home.svg';
import groups from '../assets/groups.svg';
import link from '../assets/link.svg';
import settings from '../assets/settings.svg';
import logo from '../assets/logo.svg'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
interface SidebarProps {
  isOpen: boolean;
  isMobile: boolean;

}
const Sidebar: React.FC<SidebarProps> = ({ isOpen,isMobile  }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    { name: "Home", path: "/", icon: home },
    { name: "Group Posts", path: "/group-posts", icon: groups },
    {
      name: "Link Entities",
      icon: link,
      dropdown: [
        { name: "Publications", path: "/publications" },
        { name: "Entities", path: "/entities" },
      ],
    },
    {
      name: "Settings",
      icon: settings,
      dropdown: [
        { name: "Entities", path: "/settingsentities" },
        { name: "Attributes", path: "/attributes" },
        { name: "Social Media", path: "/socialmedia" },
      ],
    },
  ];

  return (
    <aside
    className={`bg-[#1A3561] text-white w-[300px] h-screen transition-transform duration-300 z-30 ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } ${isMobile ? "fixed top-0 left-0 shadow-lg" : "absolute"}`}
    style={{ borderRadius: "0px 0px 16px 0px" }}
  >
           <div className="flex items-center justify-between w-[100%] h-[60px] p-2 bg-[#F8FAFC]" style={{ borderRight: "1px solid #E2E8F0" }}>
        <img src={logo} alt="Logo" width="60%" />
      </div>
      <nav className="flex flex-col space-y-2 p-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return item.dropdown ? (
            <div key={item.name}>
              <button
                onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                className="flex items-center btn space-x-2 px-4 py-2 w-full text-left rounded-md hover:bg-[#8E8E93] hover:text-white active:bg-[#8E8E93]"
              >
                <img src={item.icon} alt={item.name} />
                <span className={`${isActive ? "text-white" : "text-[#C7C7CC] hover:text-white"}`}>{item.name}</span>
                {openDropdown === item.name ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openDropdown === item.name && (
                <div className="ml-6 flex flex-col space-y-2">
                  {item.dropdown.map((subItem) => (
                    <button
                      key={subItem.name}
                      onClick={() => navigate(subItem.path)}
                      className={`px-4 py-2 text-left btn rounded-md w-full text-[#c7c7cc] transition-colors duration-300 ${location.pathname === subItem.path
                          ? "bg-[#8E8E93] text-[#c7c7cc]"
                          : "hover:bg-[#8E8E93] hover:text-[#ffffff] active:bg-[#ffffff]"
                        }`}
                    >
                      {subItem.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`flex items-center btn space-x-2 px-4 py-2 w-full text-left rounded-md transition-colors duration-300 ${isActive
                  ? "bg-[#8E8E93] text-white"
                  : "hover:bg-[#8E8E93] hover:text-white active:bg-[#8E8E93]"
                }`}
            >
              <img src={item.icon} alt={item.name} />
              <span className={`${isActive ? "text-white" : "text-[#C7C7CC] hover:text-white"}`}>{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
export default Sidebar;
