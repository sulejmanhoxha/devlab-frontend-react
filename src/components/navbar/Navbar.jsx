import { motion } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import Wishlist from "../Wishlist";
import { ThemeToggle } from "./ThemeToggle";
import UserDropdown from "./UserDropdown";

const Navbar = ({ selectedPets }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative flex items-center justify-between border-b-[1px] border-gray-200 bg-white p-4">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight selectedPets={selectedPets} />
      <NavMenu isOpen={isOpen} />
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
      <NavLink text="Posts" href="/posts" />
      <NavLink text="My Pets" href="/pets" />
      <NavLink text="Shelters" href="/shelters" />
      <NavLink text="Contact" href="/contact" />
    </div>
  );
};

const NavLink = ({ text, href }) => {
  return (
    <Link
      to={href}
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

const NavRight = ({ selectedPets }) => {
  const { logout, userQuery } = useAuth();
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center space-x-4">
        <Wishlist selectedPets={selectedPets} />
      </div>
      {userQuery.data ? (
        <UserDropdown username={userQuery.data.username} />
      ) : (
        <Link to="/login">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="whitespace-nowrap rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text px-4 py-2 font-medium text-transparent"
          >
            Login
          </motion.button>
        </Link>
      )}
      <ThemeToggle />
    </div>
  );
};

const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute left-0 right-0 top-full flex origin-top flex-col gap-4 bg-white p-4 shadow-lg"
    >
      <MenuLink text="Home" href="/" />
      <MenuLink text="Posts" href="/posts" />
      <MenuLink text="My Pets" href="/pets" />
      <MenuLink text="Shelters" href="/shelters" />
      <MenuLink text="Contact" href="/contact" />
    </motion.div>
  );
};

const MenuLink = ({ text, href }) => {
  return (
    <Link to={href}>
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

export default Navbar;

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
