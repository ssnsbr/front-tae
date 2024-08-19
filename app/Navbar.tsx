"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug, AiOutlineSearch } from "react-icons/ai";
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
  TextField,
} from "@radix-ui/themes";
import { login_url, logout_url } from "@/api/global-urls";

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
            <Searchbar />
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};

const Searchbar = () => {
  return (
    <>
      <TextField.Root placeholder={strings.Search}>
        <TextField.Slot>
          <AiOutlineSearch height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </>
  );
};
const NavLinks = () => {
  const currentPath = usePathname();
  const links = [
    { label: strings.dashboard, href: "/" },
    { label: strings.Products, href: "/products" },
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
        {strings.Login}
      </Link>
    );
  }

  return (
    <div>
      <div>
        <Link className="nav-link" href="/profile">
          {strings.Profile}
        </Link>
      </div>
      <div>
        <Link className="nav-link" href="/api/auth/signout">
          {strings.Signout}
        </Link>{" "}
      </div>
    </div>
  );
};

export default NavBar;
