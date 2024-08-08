import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, LogOut, User } from "lucide-react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

const links = [
  { href: "/profile", label: "Profile", icon: User },
  { href: "/login", label: "Logout", icon: LogOut },
];

export default function UserDropdown({ username }) {
  const { logout } = useAuth();
  return (
    <div className="">
      <Menu>
        <MenuButton as={Fragment}>
          <button className="inline-flex items-center gap-2 rounded-md border-2 px-3 py-1.5 data-[open]:bg-gray-200 data-[focus]:outline-1 data-[focus]:outline-white">
            {username} <ChevronDownIcon className="size-4 fill-white/60" />
          </button>
        </MenuButton>
        {/* <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Options
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton> */}

        <MenuItems
          transition
          anchor="bottom end"
          className="w-60 origin-top divide-y rounded-md border bg-white p-1 shadow transition duration-200 ease-out [--anchor-gap:4px] data-[closed]:scale-95 data-[closed]:opacity-0 dark:bg-gray-700 dark:text-white sm:[--anchor-gap:8px]"
        >
          {links.map((link) => (
            <MenuItem key={link.href} as={Fragment}>
              <Link
                className={`group flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 data-[focus]:bg-blue-200 ${link.label === "Logout" ? "bg-red-100 text-red-500" : ""}`}
                to={link.href}
                {...(link.label === "Logout" && { onClick: logout })}
              >
                {link.icon ? (
                  <link.icon className="invisible size-3.5 group-data-[selected]:visible" />
                ) : (
                  ""
                )}
                {link.label}
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}
