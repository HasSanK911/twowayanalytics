import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import home from '../assets/home.svg';
import groups from '../assets/groups.svg';
import link from '../assets/link.svg';
import settings from '../assets/settings.svg';
import logo from '../assets/logo.svg'
import sidebararrow from '../assets/sidebararrow.svg'
import User from '../assets/user.svg'

export default function Sidebar() {
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
        { name: "Entity 1", path: "/entity-1" },
        { name: "Entity 2", path: "/entity-2" },
      ],
    },
    {
      name: "Settings",
      icon: settings,
      dropdown: [
        { name: "Entities", path: "/profile" },
        { name: "Attributs", path: "/security" },
        { name: "Social Media", path: "/security" },
      ],
    },
    { name: "Ahmad", path: "/profile", icon: User },
  ];

  return (
    <aside className="bg-[#1A3561] text-white w-[300px] h-screen" style={{ borderRadius: "0px 0px 16px 0px" }}>
      <div className="flex items-center justify-between w-[100%] h-[60px] p-2 bg-[#F8FAFC]" style={{borderRight:"1px solid #E2E8F0"}}>
        <img src={logo} alt="Logo" width="60%" />
        <button className='btn'><img src={sidebararrow} alt="Sidebar Arrow" /></button>
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
                <span  className={`${isActive ? "text-white" : "text-[#C7C7CC] hover:text-white" }`}>{item.name}</span>
              </button>
              {openDropdown === item.name && (
                <div className="ml-6 flex flex-col space-y-2">
                  {item.dropdown.map((subItem) => (
                    <button
                      key={subItem.name}
                      onClick={() => navigate(subItem.path)}
                      className={`px-4 py-2 text-left btn rounded-md w-full text-[#c7c7cc] transition-colors duration-300 ${
                        location.pathname === subItem.path
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
              className={`flex items-center btn space-x-2 px-4 py-2 w-full text-left rounded-md transition-colors duration-300 ${
                isActive
                  ? "bg-[#8E8E93] text-white"
                  : "hover:bg-[#8E8E93] hover:text-white active:bg-[#8E8E93]"
              }`}
            >
              <img src={item.icon} alt={item.name} />
              <span  className={`${isActive ? "text-white" : "text-[#C7C7CC] hover:text-white"}`}>{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}