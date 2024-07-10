"use client"

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { Spacer } from "@nextui-org/spacer";

import { siteConfig } from "@/config/site";
import PageDots from "@/components/pagination"
import { title, subtitle } from "@/components/primitives";
import {
  GithubIcon,
  AppleIcon,
  MetaIcon,
} from "@/components/icons";

import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import '../styles/slider.css';

let appPreviewImage = [
  {
    src: "/MobileApp/AppPreview.01.png"
  },
  {
    src: "/MobileApp/AppPreview.04.png"
  },

  {
    src: "/MobileApp/AppPreview.03.png"
  },
  {
    src: "/MobileApp/AppPreview.02.png"
  },
]

export default function Home() {
  const [index, setIndex] = React.useState(0)
  const displayInterval = 4000; // ms

  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(
    () => {
        resetTimeout();
        timeoutRef.current = setTimeout(() =>
          // loop scrolling
          setIndex((prevIndex) => prevIndex === (appPreviewImage.length - 1) ? 0 : (prevIndex + 1)),
          displayInterval
        );

        return () => {
          resetTimeout();
        };
      },
    [index]
  );

  const PreviewImages = appPreviewImage.map((item, idx) => {
    return (
      <Image
        key={idx}
        src={item.src}
        style={{
          filter: 'drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5))'
        }}
        className="slide mx-8 my-8"
        removeWrapper
      />)
  });

  const SlideDots = appPreviewImage.map((_, idx) => (
    <li className="w-6 h-6">
      <button
        key={idx}
        className={`w-full h-full rounded-full ${idx === index ? 'bg-secondary' : 'bg-default-300'}`}
        onClick={ () => {setIndex(idx);} }
      />
    </li>
  ))

  return (
    <section>
      <Element
        name = "Mobile"
        className="flex flex-col items-center justify-center max-w-screen min-h-screen px-3"
        style={{
          background: 'linear-gradient(180deg, rgba(126, 84, 181, 100) 0%, rgba(126, 84, 181, 0) 100%)'
        }}
      >
        <div className = "grid grid-cols-2 max-w-screen">
          <div
            className = "flex flex-col mx-auto items-center justify-center mx-20"
          >
            <div className = "slideViewport">
              <div
                className = "slideContainer"
                style = {{
                  transform: `translate3d(${-index * 100}%, 0, 0)`,
                  transition: 'ease 1000ms'
                  // transition: index === 0 ? 'none' : 'ease 2000ms'
                }}
              >
                {PreviewImages}
              </div>
            </div>

            <ul className="flex gap-3 items-center">
              {SlideDots}
            </ul>
          </div>

          <div
            className="flex flex-col max-w-lg items-center justify-center"
          >
            <div className="inline-block text-center justify-center">
              <h1 className={title()}>Make&nbsp;</h1>
              <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
              <br />
              <h1 className={title()}>
                websites regardless of your design experience.
              </h1>
              <h2 className={subtitle({ class: "mt-4" })}>
                Beautiful, fast and modern React UI library.
              </h2>
            </div>

            <div className="flex gap-3">
              <Link
                isExternal
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                href={siteConfig.links.docs}
              >
                Documentation
              </Link>
              <Link
                isExternal
                className={buttonStyles({ variant: "bordered", radius: "full" })}
                href={siteConfig.links.github}
              >
                <GithubIcon size={20} />
                GitHub
              </Link>
            </div>

            <div className="mt-8">
              <Snippet hideCopyButton hideSymbol variant="bordered">
                <span>
                  Get started by editing <Code color="primary">app/page.tsx</Code>
                </span>
              </Snippet>
            </div>
          </div>
        </div>
      </Element>

      <Element
        name = "XR"
        className="flex flex-col items-center justify-center max-w-screen min-h-screen px-3"
        style={{
          backgroundImage: `url('CoverArt_Landscape.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      <div
        className="flex flex-col max-w-screen-lg text-center justify-center"
        style={{ marginTop: "-20vh" }}
      >
        <div className="py-10">
          <h1 className={title({ size: "lg", color: "white" })}
              style={{
                filter: 'drop-shadow(0px 0px 10px rgba(126, 84, 181, 0.75))'
              }}>
                FaithTime
          </h1>
          <h1 className={title({ size: "lg", color: "violet" })}> XR&nbsp;</h1>
          <h2 className={subtitle({ color: "white", class: "mt-4" })}>
            Daily Prayers & Devotions
          </h2>
        </div>

        <Card
          className="border-none bg-background/50 dark:bg-background/50"
          isBlurred
          shadow="sm"
        >
          <CardHeader className=" ml-5 flex-col items-start p-0 pt-3">
            <h4 className="text-sm">Available on</h4>
          </CardHeader>
          <CardFooter className="justify-center mb-2">
            <Button
              className="text-lg font-bold bg-secondary/40"
              size="lg"
              radius="full"
              variant="flat"
              href="https://apps.apple.com/app/faithtime/id6503560893?platform=vision"
              isExternal
              as={Link}
            >
              <AppleIcon />
              Vision Pro
            </Button>
            <Spacer x={3} />
            <Button
              className="text-lg font-bold bg-secondary/40"
              size="lg"
              radius="full"
              variant="flat"
              href="https://www.meta.com/experiences/7932069240179240/"
              isExternal
              as={Link}
            >
              <MetaIcon />
              Meta Quest
            </Button>
          </CardFooter>
        </Card>

        <div className="flex text-center justify-center mt-7">
          <Link
              className="flex-shrink-0 text-white"
              href="https://discord.gg/Mc8d5sXDp9"
              isExternal
          >
            {/*<DiscordIcon />*/}
          </Link>
          <Spacer x={2} />
          <Link
            className="flex-shrink-0 text-white"
            href="https://x.com/FaithtimeApp"
            isExternal
          >
            {/*<XIcon />*/}
          </Link>
          <Spacer x={2} />
          <Link
            className="flex-shrink-0 text-white"
            href="https://www.instagram.com/faithtimelab"
            isExternal
          >
            {/*<InstagramIcon />*/}
          </Link>
        </div>
      </div>
      </Element>
    </section>
  );
}
