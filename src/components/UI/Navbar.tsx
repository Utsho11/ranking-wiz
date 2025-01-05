"use client";
import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { useTheme } from "next-themes";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import { ChevronDown, Logo, MoonFilledIcon, SunFilledIcon } from "../icons";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark"); // Toggle between dark and light theme
  };

  if (!mounted) return null;
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          {/* <Link href="/">
            <Logo />
            <p className="font-bold text-inherit">RankingWiz</p>
          </Link> */}
          <Link href="/">
            <div className="flex items-center">
              <Logo size={24} />
              <p className="font-bold text-2xl">RankingWiz</p>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          {/* <Logo />
          <p className="font-bold text-inherit">RankingWiz</p> */}
          <Link href="/">
            <div className="flex items-center">
              <Logo size={24} />
              <p className="font-bold text-2xl">RankingWiz</p>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/about">About</Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 text-medium bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="lg"
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="RankingWiz Services"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {/* First Section */}
            <DropdownSection showDivider={true} title="Organic Search">
              <DropdownItem key="autoscaling">SEO</DropdownItem>
              <DropdownItem key="optimization">E-commerce SEO</DropdownItem>
            </DropdownSection>

            {/* Second Section */}
            <DropdownSection showDivider={true} title="Digital Marketing">
              <DropdownItem key="analytics">
                Social Media Marketing
              </DropdownItem>
              <DropdownItem key="monitoring">Monitoring</DropdownItem>
            </DropdownSection>
            <DropdownSection showDivider={true} title="Design & Development">
              <DropdownItem key="analytics">Web Design</DropdownItem>
              <DropdownItem key="monitoring">Web Development</DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            className="bg-transparent"
            size="sm"
            variant="solid"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <MoonFilledIcon size={16} />
            ) : (
              <SunFilledIcon size={16} />
            )}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Help & Support
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
