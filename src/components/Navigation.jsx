import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
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

  return (
    <div className="site-navigation">
      <span>Yes awesome oasis</span>
      <ul>
        {navLinks.map((link, index) => (
          <Link to={link.path} key={index}>
            {link.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
