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
import Footer from "@/components/footer";
import Ccard from "@/components/card";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import {
  AppleIcon,
  MetaIcon,
  AppStoreIcon,
  GooglePlayIcon,
} from "@/components/icons";
import "../styles/satr.css";
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
            "linear-gradient(135deg, rgba(255, 192, 203, 1) 0%, rgba(0, 191, 255, 1) 100%)",
        }}
      >
        <div className="relative min-h-screen">
          <div className="relative z-10">
            <div className="w-full max-w-screen-2xl mx-auto">
              <div className="mx-auto md:grid md:grid-cols-2 md:gap-8">
                <div className="flex flex-col items-center md:right-12">
                  {AppNameWithSlogan}
                  {MobileDownloadButtons}
                </div>
              </div>
            </div>

            <div className="background-container relative">
              {" "}
              {/* 添加 relative 作为定位基准 */}
              <div className="relative h-[500px]">
                {" "}
                {/* 设置容器高度 */}
                {/* 第一张图片 - 上帝图像 */}
                <img
                  src="/star/god.png"
                  alt="God"
                  className="absolute w-[500px] bottom-[-2%] left-[35%] z-20"
                />
                {/* 第二张图片 - 十字架 */}
                <img
                  src="/star/cross.png"
                  alt="Cross"
                  className="absolute w-[300px] bottom-[5%] left-[52%] z-10"
                />
              </div>
            </div>
          </div>
        </div>
        <Ccard />
      </TrackedDiv>
    </TrackedDiv>
  );
}
