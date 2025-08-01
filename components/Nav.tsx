// src/components/Nav.tsx
import React from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Books", href: "#" },
  { label: "Certs", href: "#" },
  { label: "Notes", href: "#" },
];

export default function Nav() {
  return (
    <nav className="hidden sm:flex gap-6 text-sm text-zinc-600">
      {navItems.map((item) => (
        <Link key={item.label} href={item.href} className="hover:text-zinc-900">
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
