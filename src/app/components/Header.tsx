"use client";

import { useState } from "react";

const navItems = [
  { href: "/#products", label: "Products" },
  { href: "/#industries", label: "Industries" },
  { href: "/#custom", label: "Custom Options" },
  { href: "/#factory", label: "Factory" },
  { href: "/#projects", label: "Projects" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="nav-wrap">
        <a className="brand" href="/" aria-label="SORIVA Packaging home">
          <span className="brand-mark">S</span>
          <span>
            <b>SORIVA</b>
            <small>PACKAGING</small>
          </span>
        </a>
        <button
          className="menu-btn"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <nav className={`main-nav${open ? " open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a href="/#quote" className="nav-cta" onClick={close}>
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
