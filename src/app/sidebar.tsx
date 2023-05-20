"use client";

import { Tab } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

function Sidebar() {
  const pathname = usePathname();
  const links = [
    {
      title: "Ventas",
      href: "/",
    },
    {
      title: "Proveedores",
      href: "/proveedores",
    },
  ];

  return (
    <nav className="h-full bg-slate-100 relative p-3 w-60">
      <h3 className="font-bold text-sm text-slate-400 uppercase mb-3">
        Lavadero
      </h3>
      <div className="text-sm text-slate-500 flex flex-col gap-1">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
            key={index}
              className={`p-2 rounded ${
                isActive ? "bg-slate-200 text-slate-500" : "hover:bg-slate-200 text-slate-400"
              }`}
              href={link.href}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Sidebar;
