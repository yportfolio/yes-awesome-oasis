import { Avatar } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ user }) => {
  const navLinks = [
    {
      title: "Blog",
      path: "/",
    },
    {
      title: "Web Dev",
      path: "/webdev",
    },
    {
      title: "Cloud",
      path: "/cloud",
    },
    {
      title: "Algorithms",
      path: "/algos",
    },
    {
      title: "Brain Hacking",
      path: "/health",
    },
    {
      title: "Login",
      path: "/login",
    },
    {
      title: "Post Viewer",
      path: "/post",
    },
  ];

  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="site-navigation">
      <span className="menu-title">Yes awesome oasis</span>
      <div className={`menu-content-container ${menuActive && "active"}`}>
        <ul>
          {navLinks.map((link, index) => (
            <Link to={link.path} key={index}>
              {link.title}
            </Link>
          ))}
        </ul>
        <span className="menu-avatar-container">
          <Avatar
            src="https://images.unsplash.com/photo-1627594042767-28ac5bca02c2?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            size={38}
          />
          <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
        </span>
      </div>
      <i
        className="ionicons icon ion-ios-menu"
        onClick={() => setMenuActive(!menuActive)}
      ></i>
    </div>
  );
};

export default Navigation;
