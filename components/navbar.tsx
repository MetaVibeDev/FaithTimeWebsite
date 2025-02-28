"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TiktokIcon,
  DiscordIcon,
  XIcon,
  InstagramIcon,
  SearchIcon,
} from "@/components/icons";
import { TrackClick } from "@/components/track";

const TrackedLink = TrackClick(Link);
const TrackedScrollLink = TrackClick(ScrollLink);

export class Navbar extends React.Component {
  searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  render() {
    return (
      <NextUINavbar maxWidth="2xl" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              {/* <Logo /> */}
              <p className="font-bold text-inherit">FaithTime</p>
            </NextLink>
          </NavbarBrand>
          <ul className="flex gap-4 items-center justify-cemter mx-2">
            {siteConfig.navItems.map((item, idx) => (
              <TrackedScrollLink
                key={idx}
                duration={500}
                smooth={true}
                to={item.label}
                trackName={`Navbar ScrollLink_${item.label}`}
              >
                <NavbarItem
                  key={item.href}
                  className="hover:cursor-pointer hover:text-secondary hover:font-bold"
                >
                  {item.label}
                </NavbarItem>
              </TrackedScrollLink>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <TrackedLink
                isExternal
                aria-label="Tiktok"
                href={siteConfig.links.tiktok}
                trackName={"Navbar ExternalLink_SocialMedia_Tiktok"}
              >
              <TiktokIcon className="text-default-700" />
            </TrackedLink>
            <TrackedLink
              isExternal
              aria-label="X"
              href={siteConfig.links.twitter}
              trackName={"Navbar ExternalLink_SocialMedia_X(Twitter)"}
            >
              <XIcon className="text-default-700" />
            </TrackedLink>
            <TrackedLink
              isExternal
              aria-label="Instagram"
              href={siteConfig.links.instagram}
              trackName={"Navbar ExternalLink_SocialMedia_Instagram"}
            >
              <InstagramIcon className="text-default-700" />
            </TrackedLink>
            <TrackedLink
              isExternal
              aria-label="Discord"
              href={siteConfig.links.discord}
              trackName={"Navbar ExternalLink_SocialMedia_Discord"}
            >
              <DiscordIcon className="text-default-700" />
            </TrackedLink>
            <ThemeSwitch className="ml-4" />
          </NavbarItem>

          {/* <NavbarItem className="hidden lg:flex">
            {this.searchInput}
          </NavbarItem> */}

          {/*
          <NavbarItem className="hidden md:flex">
            <Button
              isExternal
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={siteConfig.links.sponsor}
              startContent={<HeartFilledIcon className="text-danger" />}
              variant="flat"
            >
              Sponsor
            </Button>
          </NavbarItem>
          */}
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          {this.searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "secondary"
                        : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    );
  }
}
