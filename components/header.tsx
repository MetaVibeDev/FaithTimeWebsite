"use client";
import { useEffect, useState } from "react";
import { AppStoreIcon, GooglePlayIcon, DiscordIcon } from "./icons";
import Lumi from "./lumi/Lumi";
import { TrackClick } from "./track";

// 创建被 TrackClick 包装的链接组件
const TrackedLink = TrackClick("a");

export default function Header() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <div className="sm:pt-0 relative overflow-hidden px-4 py-12 lg:px-[200px] md:px-[100px] w-full sm::h-[75vh] h-[100vh] bg-black bg-gradient-to-br from-[#FFBBEC] to-[#A9C9FF] flex justify-center">
      <div className="z-10 w-[1200px] flex sm:items-center flex-col sm:flex-row">
        <img className="sm:hidden flex w-48" src="/images/faithtimeicon.png" />
        <div className="max-w-[42rem] md:text-start text-center mt-24 sm:mt-0 ">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            Your daily steps, your lamb's growth.
          </h1>
          <p className="sm:text-xl md:text-2xl text-gray-700 lg:mb-12 mb-4">
            Start your journey with God—one day, one prayer at a time.
          </p>
          <div className="mt-20 sm:mt-0 flex-col sm:flex-row justify-center  md:justify-start  items-center gap-8 sm:gap-4 flex">
            <TrackedLink
              trackName="app_store_download"
              href="https://apps.apple.com/app/faithtime/id6503560893"
              className=" h-14 transition-transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppStoreIcon
                width={width > 800 ? 180 : 300}
                height={width < 800 ? 70 : 53}
              />
            </TrackedLink>
            <TrackedLink
              trackName="google_play_download"
              href="https://play.google.com/store/apps/details?id=com.metavibe.faithtime&gl=SG"
              className="h-14 transition-transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GooglePlayIcon
                width={width > 800 ? 170 : 255}
                height={width < 800 ? 62 : 53}
              />
            </TrackedLink>
          </div>
          <div>
            <button
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                color: "#000",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: 30,
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                borderBottom: "2px solid #000",
                paddingBottom: 1,
                marginLeft: 80,
                marginTop: 20,
                paddingLeft: 60,
              }}
              onClick={() => {
                window.open("https://discord.gg/GDHzvamn7a", "_blank");
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#4b5563";
                e.currentTarget.style.borderBottomColor = "#4b5563";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#000";
                e.currentTarget.style.borderBottomColor = "#000";
              }}
            >
              <img
                src="/star/discode.png"
                alt="Discord"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 5,
                  transform: "translateY(-50%)",
                  width: 49,
                  height: 49,
                  objectFit: "contain",
                  marginLeft: -70,
                }}
              />
              <span style={{ marginLeft: -60 }}>Join our Discord</span>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: width < 800 ? `${-width * 0.3}px` : `${-width * 0.1}px`,
          bottom: `${width * 0}px`,
        }}
      >
        <Lumi
          animation="sleep"
          size={width < 800 ? width : width / 3}
          color="orange"
          isPlaying={true}
        />
      </div>
      <div
        className="rotate-12"
        style={{
          position: "absolute",
          left: width < 800 ? `${width * -0.3}px` : `${width * -0.07}px`,
          bottom: width < 800 ? `${width * -0.3}px` : `${width * -0.1}px`,
        }}
      >
        <Lumi
          animation="wink"
          size={width < 800 ? width : width / 3}
          color="purple"
          isPlaying={true}
        />
      </div>
      <div
        className="-rotate-12 sm:rotate-0"
        style={{
          position: "absolute",
          left: width < 800 ? `${width * 0.7}px` : `${width * 0.44}px`,
          bottom: width < 800 ? `${width * 0.2}px` : `${width * -0.1}px`,
        }}
      >
        <Lumi
          animation="love"
          size={width < 800 ? width / 2 : width / 3}
          color="blue"
          isPlaying={true}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: width < 800 ? `${width * 0.1}px` : `${width * 0.44}px`,
          bottom: width < 800 ? `${width * -0.15}px` : `${width * -0.07}px`,
        }}
      >
        <Lumi
          animation="sing"
          size={width < 800 ? width / 2 : width / 5}
          color="green"
          isPlaying={true}
        />
      </div>
      <div
        style={{
          position: "absolute",
          right: width < 800 ? `${width * -0.3}px` : `${width * -0.15}px`,
          bottom: width < 800 ? `${width * -0.3}px` : `${width * -0.15}px`,
          transform: "rotate(-12deg)",
        }}
      >
        <Lumi
          animation="default"
          size={width < 800 ? width : width / 2.3}
          color="white"
          isPlaying={true}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: `${width * 0.65}px`,
          bottom: `${width * -0.03}px`,
        }}
        className="absolute z-1  hidden md:flex "
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 justify-center items-center">
          <div className="scale-150">
            <img
              className="animate-spin [animation-duration:20s]"
              src="/images/glow.png"
            />
          </div>
        </div>
        <img className="relative" src="/star/god.png" />
      </div>
    </div>
  );
}
