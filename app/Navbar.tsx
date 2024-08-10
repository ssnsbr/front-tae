"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";
import strings from "../dictionaries/fa.json";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Skeleton,
  Text,
} from "@radix-ui/themes";
import { login_url, logout_url } from "@/api/globalurls";

const NavBar = () => {
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <AiFillBug />
            </Link>
            <NavLinks />
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};
const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
    { label: strings.dashboard, href: "/" },
    { label: "Issues", href: "/issues" },
    { label: strings.Products, href: "/product" },
    { label: strings.Sellers, href: "/seller" },
  ];

  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classNames({
              "nav-link": true,
              "!text-zinc-900": link.href === currentPath,
            })}
            href={link.href}
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
      <Link className="nav-link" href="/api/auth/signin">
        Login
      </Link>
    );
  }

  return (
    <div>
      <div>
        <Link className="nav-link" href="/profile">
          Profile
        </Link>
      </div>
      <div>
        <Link className="nav-link" href="/api/auth/signout">
          signout
        </Link>{" "}
      </div>
    </div>
  );
};

export default NavBar;
