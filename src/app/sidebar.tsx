"use client";

import { Tab, Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useState } from "react";
import { RxChevronLeft, RxPerson, RxViewGrid } from "react-icons/rx";

function Sidebar() {
  const [minimized, setMinimized] = useState(false);
  const pathname = usePathname();
  const links = [
    {
      title: "Ventas",
      href: "/",
      icon: <RxViewGrid />,
    },
    {
      title: "Proveedores",
      href: "/proveedores",
      icon: <RxPerson />,
    },
  ];

  return (
    <nav className={`bg-slate-100 p-3 ${!minimized &&  '-mr-20 md:mr-0 z-10'}`}>
      <button
        onClick={() => setMinimized((prev) => !prev)}
        className="p-1.5 w-full flex justify-end
      "
      >
        <RxChevronLeft
          className={`text-xl text-slate-400 cursor-pointer transition duration-200 ${
            minimized && "rotate-180"
          }`}
        />
      </button>
      <ul
        className={` rounded-md transition-all ${!minimized && "pr-12 md:pr-16"}`}
      >
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <li
              className={`p-2 rounded ${
                isActive ? "text-emerald-600 font-medium" : "text-slate-400"
              }`}
            >
              <Link
                key={index}
                href={link.href}
                className={`flex items-center  gap-3 leading-none`}
              >
                {link.icon}
                <Transition
                  show={!minimized}
                  enter="transition-all"
                  enterFrom="opacity-0 -translate-x-2"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition-all duration-0"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 -translate-x-2"
                >
                  {link.title}
                </Transition>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebar;
