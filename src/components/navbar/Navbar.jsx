import { motion } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { ThemeToggle } from "./ThemeToggle";
import "/src/css/base.css";

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between border-b-[1px] border-gray-200 bg-white p-4">
      <NavLeft setIsOpen={setIsOpen} />
      <div className="flex items-center gap-4 text-blue-600 max-lg:hidden">
        <Instagram />
        <Twitter />
        <Facebook />
      </div>
      <NavRight />
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

const Logo = () => {
  return (
    <img
      src="/images/icon.png"
      alt="logo"
      className="aspect-video h-10 object-cover"
    />
  );
};

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block text-2xl text-gray-950 lg:hidden"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <Menu />
      </motion.button>
      <Logo />
      <NavLink text="Home" href="/" />
      <NavLink text="Pets" href="/pets" />
      <NavLink text="About" href="/about" />
      <NavLink text="Contact" href="/contact" />
    </div>
  );
};

const NavLink = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="hidden h-[30px] overflow-hidden font-medium lg:block"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex h-[30px] items-center text-gray-500">{text}</span>
        <span className="flex h-[30px] items-center text-indigo-600">
          {text}
        </span>
      </motion.div>
    </Link>
  );
};

const NavRight = () => {
  return (
    <div className="flex items-center gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="whitespace-nowrap rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 font-medium text-white"
      >
        Sign in
      </motion.button>

      <ThemeToggle />
    </div>
  );
};

const NavMenu = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute left-0 right-0 top-full flex origin-top flex-col gap-4 bg-white p-4 shadow-lg"
    >
      <MenuLink text="Home" href="/" setIsOpen={setIsOpen} />
      <MenuLink text="Pets" href="/pets" setIsOpen={setIsOpen} />
      <MenuLink text="About" href="/about" setIsOpen={setIsOpen} />
      <MenuLink text="Contact" href="/contact" setIsOpen={setIsOpen} />
    </motion.div>
  );
};

const MenuLink = ({ text, href, setIsOpen }) => {
  return (
    <Link to={href} onClick={() => setIsOpen(false)}>
      <motion.span
        variants={menuLinkVariants}
        className="flex h-[30px] items-start gap-2 overflow-hidden text-lg font-medium"
      >
        <motion.span variants={menuLinkArrowVariants}>
          <ArrowRight className="h-[30px] text-gray-950" />
        </motion.span>
        <motion.div whileHover={{ y: -30 }}>
          <span className="flex h-[30px] items-center text-gray-500">
            {text}
          </span>
          <span className="flex h-[30px] items-center text-indigo-600">
            {text}
          </span>
        </motion.div>
      </motion.span>
    </Link>
  );
};

export default FlipNav;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
