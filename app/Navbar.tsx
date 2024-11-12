"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { AiFillBug, AiOutlineSearch } from "react-icons/ai";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Container, Flex, Skeleton, TextField } from "@radix-ui/themes";
import classNames from "classnames";
import strings from "../dictionaries/fa.json";
import Searchbar from "./Searchbar";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const [isDark, setIsDark] = useState(false);

  // Load theme preference from localStorage and apply it
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") setIsDark(true);
  }, []);

  // Save theme preference when toggled
  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark-theme", isDark);
  }, [isDark]);

  return (
    <nav className="border-b mb-5 px-5 py-4 shadow-sm">
      <Container>
        <Flex justify="between" align="center">
          <Flex align="center" gap="4">
            <Link href="/" className="text-2xl font-bold flex items-center">
              <AiFillBug className="mr-2" />
              BrandName
            </Link>
            <NavLinks />
            {/* <ThemeToggle /> */}

          </Flex>
          <Flex align="center" gap="4">
            <Searchbar />
            <AuthStatus />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();
  const links = [
    { label: strings.Products, href: "/products" },
    { label: strings.Sellers, href: "/vendors" },
  ];

  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={classNames("font-medium transition-colors", {
              "text-blue-600 dark:text-blue-400": link.href === currentPath,
              "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white":
                link.href !== currentPath,
            })}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return <Skeleton width="3rem" />;
  if (status === "unauthenticated") {
    return (
      <Link
        href="/api/auth/signin"
        className="font-medium text-blue-600 hover:text-blue-800"
      >
        {strings.Login}
      </Link>
    );
  }

  return (
    <div>
      <Link
        href="/profile"
        className="font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
      >
        {strings.Profile}
      </Link>
      <Link
        href="/api/auth/signout"
        className="ml-3 font-medium text-blue-600 hover:text-blue-800"
      >
        {strings.Signout}
      </Link>
    </div>
  );
};

export default NavBar;
