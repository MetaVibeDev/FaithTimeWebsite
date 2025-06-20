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
import footer from "./footer/page";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import {
  AppleIcon,
  MetaIcon,
  AppStoreIcon,
  GooglePlayIcon,
} from "@/components/icons";

import "../styles/slider.css";

import { TrackClick, TrackExposure } from "@/components/track";

const TrackedLink = TrackClick(Link);
const TrackedButton = TrackClick(Button);

const TrackedDiv = TrackExposure("div");

type TimeoutType = ReturnType<typeof setTimeout> | null;

export default function Home() {
  const AppNameWithSlogan = (
    <div
      className="flex flex-col max-w-lg items-center"
      style={{
        marginTop: "13vh",
        marginBottom: "5vh",
      }}
    >
      <div className="inline-block text-center justify-center">
        <h1 className={title({ size: "md" })}>
          Your daily steps,
          <br />
          your lamb's growth.
        </h1>
        <p className="subtitle">
          Start your journey with God—one day, one prayer at a time.
        </p>
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
    <TrackedDiv trackName="Page_Home">
      <TrackedDiv
        trackName="Section_Mobile"
        className="flex flex-col items-center justify-center min-h-screen px-3"
        style={{
          background:
            "linear-gradient(180deg, rgba(126, 84, 181, 1) 0%, rgba(126, 84, 181, 0) 100%)",
        }}
      >
        <div className="w-full max-w-screen-2xl ">
          <div className="mx-auto md:grid md:grid-cols-2 md:gap-8">
            <div className="flex flex-col items-center md:top-8 md:right-12">
              {AppNameWithSlogan}
              {MobileDownloadButtons}
              <footer />
            </div>
            {/* 可添加右侧内容 */}
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
