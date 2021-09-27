import React from "react";
import "./Sidebar.css";
import logo from "../components/Sidebar-icons/logo.svg";
import home from "../components/Sidebar-icons/home.svg";
import calendar from "../components/Sidebar-icons/calendar.svg";
import user from "../components/Sidebar-icons/user.svg";
import settings from "../components/Sidebar-icons/settings.svg";
import task from "../components/Sidebar-icons/task.svg";
import sign from "../components/Sidebar-icons/sign.svg";
import avatar from "../components/Sidebar-icons/avatar.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="sidebar_items">
          <div>
            
            <img src={home} alt="home" />
          </div>
          <div>
            
            <img src={calendar} alt="calendar" />
          </div>
          <div>
            
            <img src={user} alt="user" />
          </div>
          <div>
            
            <img src={settings} alt="settings" />
          </div>
          <div>
            
            <img src={task} alt="task" />
          </div>
          <div>
            
            <img src={sign} alt="sign" />
          </div>
        </div>

        <div className="bottom_logo">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
