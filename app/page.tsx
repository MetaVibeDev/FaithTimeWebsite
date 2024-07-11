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
  Divider,
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
  AppStoreIcon,
  GooglePlayIcon,
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
    <li className="w-20 h-2">
      <Button
        key={idx}
        className={`w-full h-full rounded-full ${idx === index ? 'bg-secondary' : 'bg-default-300'}`}
        variant="flat"
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
        <div className = "grid grid-cols-2 max-w-screen-2xl">
          <div
            className = "flex flex-col ml-0 justify-center mx-20"
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
          </div>

          <div
            className="flex flex-col max-w-lg items-center"
          >

            <div
              className="flex flex-col max-w-lg items-center"
              style={{
                marginTop: "13vh",
                marginBottom: "5vh",
              }}
            >
              <h1
                className={title({size: "lg", color: "white"})}
                style={{
                  filter: 'drop-shadow(0px 0px 30px rgba(126, 84, 181, 1))',
                  marginBottom: "-1vh",
                }}
              >
                FaithTime
              </h1>
              <br />
              <div className="inline-block text-center justify-center">
                <h1 className={title({ color: "violet" })}>Journey of </h1>
                <br />
                <h1 className={title({ size: "md" })}>Sacred Sites&nbsp;</h1>
                <h1 className={title({ color: "violet", size: "md" })}>& </h1>
                <h1 className={title({ size: "md" })}>Prayer.</h1>
              </div>
            </div>

            <div className="flex gap-3">
              <AppStoreIcon/>
              <GooglePlayIcon/>
            </div>

            <div
              className="flex flex-col max-w-lg items-center justify-center"
              style={{ marginTop: "10vh" }}
            >
              <Divider className="my-5" />

              {/*
              <div className="inline-block justify-start mt-2">
                <h2 className="w-full mx-5 my-2 text-lg text-default-600 block max-w-full">
                  Embark on a spiritual journeying with FaithTime.
                  Explore sacred sites, engage in daily devotions and meditation prayers.
                  Receive a daily bible verse and experience christian meditations through virtual exploration of christianity's revered locations.
                </h2>
              </div> */}

              <div className="inline-block text-center justify-center my-1">
                <h1 className={title({ color: "primary", size: "xs" })}>Sacred Sites Details</h1>
              </div>

              <div className="inline-block justify-start">
                <h2 className="w-full mx-5 my-2 text-md text-default-600 block max-w-full">
                  Discover christianity religion history through sacred sites.
                  Learn about churches and faith centers in our christian religion.
                  Connect with the church of Jesus Christ through suggested prayers to deepen your faith.
                </h2>
              </div>

              {/* <div className="inline-block text-center justify-center">
                <h1 className={title({ color: "violet" })}>Calendar</h1>
              </div>

              <div className="inline-block justify-start mt-2">
                <h2 className="w-full mx-5 my-2 text-lg text-default-600 block max-w-full">
                  Track spiritual growth with our Calendar.
                  Encourage devotions and mindfulness meditation, maintaining your connection with Jesus Christ and commitment to faith and family.
                </h2>
              </div> */}

              {/* <div className="inline-block text-center justify-center">
                <h1 className={title()}>Daily Scripture</h1>
              </div>

              <div className="inline-block justify-start mt-2">
                <h2 className="w-full mx-5 my-2 text-lg text-default-600 block max-w-full">
                  Start your day with this feature, which offers a bible verse of the day for daily devotion on prayer or bible study.
                  Find scriptures on faith or prayers before bed for your christian journey.
                </h2>
              </div> */}

              {/* <div className="flex gap-3">
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
              </div> */}

              {/* <Divider className="my-5" /> */}

              <ul className="flex gap-3 items-center mt-4">
                  {SlideDots}
              </ul>
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
        <div className="py-6">
          <h1
            className={title({ size: "lg", color: "white" })}
            style={{
              filter: 'drop-shadow(0px 0px 10px rgba(126, 84, 181, 0.75))'
            }}
          >
                FaithTime
          </h1>
          <h1 className={title({ size: "lg", color: "violet" })}> XR&nbsp;</h1>
          <br/>
          <h2 className="text-2xl" style={{ color: "white" }}>
              Daily Prayers, Immersively.
          </h2>
        </div>

        <Card
          className="border-none bg-background/50 dark:bg-background/50"
          isBlurred
          shadow="lg"
        >
          <CardHeader className=" ml-5 flex-col items-start p-0 pt-5">
            <h4 className="text-md">Available on</h4>
          </CardHeader>

          <CardFooter className="justify-center mb-4">
            <Button
              className="text-xl font-bold border-2 border-foreground-500 bg-gradient-to-bl from-pink-400 to-secondary-600 dark: from-pink-500 dark:to-secondary-400"
              size="lg"
              radius="lg"
              variant="bordered"
              href="https://apps.apple.com/app/faithtime/id6503560893?platform=vision"
              isExternal
              as={Link}
            >
              <AppleIcon/>
              Vision Pro
            </Button>
            <Spacer x={3} />
            <Button
              className="text-xl font-bold border-2 border-foreground-500 bg-gradient-to-tr from-pink-400 to-secondary-600 dark: from-pink-500 dark:to-secondary-400"
              size="lg"
              radius="lg"
              variant="bordered"
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
