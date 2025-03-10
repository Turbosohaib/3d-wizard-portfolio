import {
  Github,
  Home,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "@/components/ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" />;
    case "about":
      return <User className="w-full h-auto" />;
    case "projects":
      return <Palette className="w-full h-auto" />;
    case "contact":
      return <Phone className="w-full h-auto" />;
    case "github":
      return <Github className="w-full h-auto" />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" />;
    case "twitter":
      return <Twitter className="w-full h-auto" />;
    case "resume":
      return <NotebookText className="w-full h-auto" />;

    default:
      return <Home className="w-full h-auto" />;
  }
};

const item = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
  },
};

const NavLink = motion.create(Link);

const NavButton = ({ x, y, label, link, icon, newTab, labelDirection }) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{ transform: `translate(${x},${y})` }}
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full flex items-center justify-center custom-bg"
              aria-label={label}
              name={label}
            >
              <span className="relative w-[65px] h-[65px] p-5 animate-spin-slow-reverse group-hover:pause hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-md rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="cursor-pointer z-50">
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full flex items-center justify-center custom-bg"
              aria-label={label}
              name={label}
            >
              <span className="relative w-10 h-10 xs:w-[65px] xs:h-[65px] p-2.5 xs:p-5 hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span
                  className={clsx(
                    "absolute hidden peer-hover:block px-2 py-1  mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-md rounded-md shadow-lg whitespace-nowrap",
                    labelDirection === "left"
                      ? "right-full left-auto"
                      : "left-full",
                  )}
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
