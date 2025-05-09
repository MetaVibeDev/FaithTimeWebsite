"use client";

import { Link } from "@nextui-org/link";
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";
import { Spacer } from "@nextui-org/spacer";
import React, { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import {
  AppleIcon,
  MetaIcon,
  AppStoreIcon,
  GooglePlayIcon,
} from "@/components/icons";

import "../styles/slider.css";

import  { TrackClick, TrackExposure } from "@/components/track";

const TrackedLink = TrackClick(Link);
const TrackedButton = TrackClick(Button);

const TrackedDiv = TrackExposure("div");

type TimeoutType = ReturnType<typeof setTimeout> | null;

export default function Home() {
  const [index, setIndex] = React.useState(0);
  const displayTime = 4000; // ms
  const easeTime = 1000;

  const slideImageAndText = siteConfig.slideImageAndText;

  const [timeoutId, setTimeoutId] = useState<TimeoutType>(null);

  function resetTimeout() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  }

  useEffect(() => {
    resetTimeout();
    const id = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slideImageAndText.length - 1 ? 0 : prevIndex + 1,
        ),
      displayTime,
    );

    setTimeoutId(id);

    return () => {
      resetTimeout();
    };
  }, [index, displayTime, slideImageAndText.length]);

  const SildeImages = slideImageAndText.map((item, idx) => {
    return (
      <Image
        key={idx}
        removeWrapper
        className="slide object-scale-down box-border px-8 py-8"
        src={item.src}
        style={{
          filter: "drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5))",
        }}
      />
    );
  });

  const SlideImagesWrapper = (
    <div className="flex flex-col justify-center mx-10 md:ml-0 ">
      <div className="slideViewport image">
        <div
          className="slideContainer"
          style={{
            transform: `translate3d(${-index * 100}%, 0, 0)`,
            transition: `ease ${easeTime}ms`,
            // transition: index === 0 ? 'none' : 'ease 2000ms'
          }}
        >
          {SildeImages}
        </div>
      </div>
    </div>
  );

  const SlideTexts = slideImageAndText.map((item, idx) => {
    return (
      <div key={idx} className="min-w-full h-full whitespace-normal">
        <div className="text-center my-1">
          <h1 className={title({ color: "primary", size: "xs" })}>
            {item.title}
          </h1>
        </div>

        <div className="justify-start content-evenly mt-5">
          <h2 className="px-4 text-md text-default-600">{item.content}</h2>
        </div>
      </div>
    );
  });

  const SlideTextsWrapper = (
    <div className="slideViewport text">
      <div
        className="slideContainer flex flex-nowrap"
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
          transition: `ease ${easeTime}ms`,
          // transition: index === 0 ? 'none' : 'ease 2000ms'
        }}
      >
        {SlideTexts}
      </div>
    </div>
  );

  const SlideDots = siteConfig.slideImageAndText.map((_, idx) => (
    <Button
      key={idx}
      className={`w-20 h-2 rounded-full ${idx === index ? "bg-secondary" : "bg-default-300"}`}
      variant="flat"
      onClick={() => {
        setIndex(idx);
      }}
    />
  ));

  const SlideDotsWrapper = (
    <ul className="flex gap-3 items-center mt-4">{SlideDots}</ul>
  );

  const AppNameWithSlogan = (
    <div
      className="flex flex-col max-w-lg items-center"
      style={{
        marginTop: "13vh",
        marginBottom: "5vh",
      }}
    >
      <h1
        className={title({ size: "lg", color: "white" })}
        style={{
          filter: "drop-shadow(0px 0px 30px rgba(126, 84, 181, 1))",
          marginBottom: "-1vh",
        }}
      >
        FaithTime
      </h1>
      <br />
      <div className="inline-block text-center justify-center">
        <h1 className={title({ color: "violet" })}>The</h1>
        <br />
        <h1 className={title({ size: "md" })}>#1 App</h1>
        <br />
        <h1 className={title({ color: "violet" })}>for </h1>
        <br />
        <h1 className={title({ size: "md" })}>Young Christians</h1>
      </div>
    </div>
  );

  const MobileDownloadButtons = (
    <div className="flex gap-3">
      <TrackedLink
        trackName={"Section_Mobile ExternalLink_Download_AppleAppStore"}
        href={siteConfig.links.appStore}
        isExternal
      >
        <AppStoreIcon />
      </TrackedLink>
      <TrackedLink
        trackName={"Section_Mobile ExternalLink_Download_GooglePlay"}
        href={siteConfig.links.googlePlay}
        isExternal
      >
        <GooglePlayIcon />
      </TrackedLink>
    </div>
  );

  return (
    <TrackedDiv trackName={"Page_Home"}>
      <TrackedDiv
        exposureRatioThresh={0.5}
        exposureTimeThresh={3000}
        trackName={"Section_Mobile"}

        className="flex flex-col items-center justify-center max-w-screen min-h-screen px-3"
        name="Mobile"
        style={{
          background:
            "linear-gradient(180deg, rgba(126, 84, 181, 100) 0%, rgba(126, 84, 181, 0) 100%)",
        }}
      >
        {/* large screen layout */}
        <div className="hidden md:grid grid-cols-2 max-w-screen-2xl">
          {SlideImagesWrapper}

          <div className="flex flex-col max-w-lg items-center">
            {AppNameWithSlogan}

            {MobileDownloadButtons}

            <div
              className="flex flex-col max-w-lg items-center justify-center"
              style={{ marginTop: "10vh" }}
            >
              <Divider className="my-5" />

              {SlideTextsWrapper}

              {/* <Divider className="my-5" /> */}

              {SlideDotsWrapper}
            </div>
          </div>
        </div>

        {/* small screen layout */}
        <div className="md:hidden flex flex-col items-center justify-center">
          {AppNameWithSlogan}

          {MobileDownloadButtons}

          <div
            className="flex flex-col grow-0 max-w-sm items-center justify-center"
            style={{
              marginTop: "10vh",
              marginBottom: "10vh",
            }}
          >
            <Divider className="my-5" />

            <div className="mx-auto justify-self-center">
              {SlideImagesWrapper}
            </div>

            <Divider className="my-5" />

            {SlideTextsWrapper}

            {SlideDotsWrapper}
          </div>
        </div>
      </TrackedDiv>

      {/* 移除XR App展示区
      <TrackedDiv
        exposureRatioThresh={0.5}
        exposureTimeThresh={3000}
        trackName={"Section_XR"}

        className="flex flex-col items-center justify-center max-w-screen min-h-screen px-3"
        name="XR"
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
                filter: "drop-shadow(0px 0px 10px rgba(126, 84, 181, 0.75))",
              }}
            >
              FaithTime
            </h1>
            <h1 className={title({ size: "lg", color: "violet" })}>
              {" "}
              XR&nbsp;
            </h1>
            <br />
            <h2 className="text-2xl" style={{ color: "white" }}>
              Daily Prayers, Immersively.
            </h2>
          </div>

          <Card
            isBlurred
            className="border-none bg-background/50 dark:bg-background/50"
            shadow="lg"
          >
            <CardHeader className=" ml-5 flex-col items-start p-0 pt-5">
              <h4 className="text-md">Available on</h4>
            </CardHeader>

            <CardFooter className="justify-center mb-4">
              <TrackedButton
                isExternal
                as={Link}
                className="text-xl font-bold border-1 border-foreground-500 bg-gradient-to-l from-pink-400 to-secondary-400 dark:from-pink-500 dark:to-secondary-400"
                href={siteConfig.links.visionProStore}
                radius="lg"
                size="lg"
                trackName={
                  "Section_XR ExternalLink_Download_AppleVisionProStore"
                }
                variant="bordered"
              >
                <AppleIcon />
                Vision Pro
              </TrackedButton>

              <Spacer x={3} />

              <TrackedButton
                isExternal
                as={Link}
                className="text-xl font-bold border-1 border-foreground-500 bg-gradient-to-r from-pink-400 to-secondary-400 dark:from-pink-500 dark:to-secondary-400"
                href={siteConfig.links.metaQuestStore}
                radius="lg"
                size="lg"
                trackName={"Section_XR ExternalLink_Download_MetaQuestStore"}
                variant="bordered"
              >
                <MetaIcon />
                Meta Quest
              </TrackedButton>
            </CardFooter>
          </Card>

          <div className="flex text-center justify-center mt-7">
            <Link
              isExternal
              className="flex-shrink-0 text-white"
              href={siteConfig.links.discord}
            >
              // {<DiscordIcon />}
            </Link>
            <Spacer x={2} />
            <Link
              isExternal
              className="flex-shrink-0 text-white"
              href={siteConfig.links.twitter}
            >
              // {<XIcon /> }
            </Link>
            <Spacer x={2} />
            <Link
              isExternal
              className="flex-shrink-0 text-white"
              href={siteConfig.links.instagram}
            >
              // {<InstagramIcon />}
            </Link>
          </div>
        </div>
      </TrackedDiv>
      */}
    </TrackedDiv>
  );
}
