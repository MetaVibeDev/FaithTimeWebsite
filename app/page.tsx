"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import Header from "@/components/header";
import Detail from "@/components/detail";

import "../styles/satr.css";
import "../styles/slider.css";

import { TrackClick, TrackExposure } from "@/components/track";
import Card from "@/components/card";
import Download from "@/components/download";
import Testimonials from "@/components/testimonials";

// const TrackedLink = TrackClick(Link);
// const TrackedButton = TrackClick(Button);
// const TrackedDiv = TrackExposure("div");
// type TimeoutType = ReturnType<typeof setTimeout> | null;

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ua = navigator.userAgent || navigator.vendor;
      const params = new URLSearchParams(window.location.search);
      if (params.get('download') === '1') {
        if (/iPad|iPhone|iPod/.test(ua)) {
          window.location.href = 'https://apps.apple.com/app/faithtime/id6503560893';
        } else if (/android/i.test(ua)) {
          window.location.href = 'https://play.google.com/store/apps/details?id=com.metavibe.faithtime&gl=SG';
        }
      }
    }
  }, []);
  // const AppNameWithSlogan = (
  //   <div
  //     className="flex flex-col max-w-lg items-center"
  //     style={{
  //       marginTop: "13vh",
  //       marginBottom: "5vh",
  //     }}
  //   >
  //     <div className="inline-block text-center justify-center">
  //       <h1 className={title({ size: "md" })}>
  //         Your daily steps,
  //         <br />
  //         your lamb's growth.
  //       </h1>
  //       <p className="subtitle">
  //         Start your journey with God—one day, one prayer at a time.
  //       </p>
  //     </div>
  //   </div>
  // );

  // const MobileDownloadButtons = (
  //   <div className="flex gap-3">
  //     <TrackedLink
  //       trackName={"Section_Mobile ExternalLink_Download_AppleAppStore"}
  //       href={siteConfig.links.appStore}
  //       isExternal
  //     >
  //       <AppStoreIcon />
  //     </TrackedLink>
  //     <TrackedLink
  //       trackName={"Section_Mobile ExternalLink_Download_GooglePlay"}
  //       href={siteConfig.links.googlePlay}
  //       isExternal
  //     >
  //       <GooglePlayIcon />
  //     </TrackedLink>
  //   </div>
  // );

  return (
    <>
      <Navigation />
      <div id="home">
        <Header />
      </div>
      <div id="card">
        <Card />
      </div>
      <div id="detail">
        <Detail />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="download">
        <Download />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
