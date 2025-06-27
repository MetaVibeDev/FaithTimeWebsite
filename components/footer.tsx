import React from "react";
import { DiscordIcon, InstagramIcon, TiktokIcon, XIcon } from "./icons";
import { FacebookIcon } from "lucide-react";
import TelegramIcon from "@/public/telegram-brands-solid.svg";
import { TrackClick } from "./track";

// 创建被 TrackClick 包装的链接组件
const TrackedLink = TrackClick('a');

interface SocialIconProps {
  children: React.ReactNode;
  href: string;
  trackName: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ children, href, trackName }) => (
  <TrackedLink
    trackName={trackName}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex font-semibold text-[16px] items-center font no-underline gap-1.5 transition-opacity duration-200 ease-in-out whitespace-nowrap hover:opacity-80"
  >
    {children}
  </TrackedLink>
);

interface ContactLinkProps {
  children: React.ReactNode;
  href: string;
  trackName: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ children, href, trackName }) => (
  <TrackedLink
    trackName={trackName}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-[16px] flex gap-2  text-white no-underline transition-opacity duration-200 ease-in-out  whitespace-nowrap hover:opacity-80"
  >
    {children}
  </TrackedLink>
);

const Footer: React.FC = () => {
  return (
    <div className="md:gap-[84px] px-8 gap-8 md:pt-[100px] pt-8  md:pb-[65px] pb-8 bg-gradient-to-br from-[#9548FA] to-[#564DDD] w-full  text-white font-sans flex flex-col justify-between items-center">
      {/* Main Header Content */}
      <div className="flex items-start px-10  flex-1 w-full h-[230]">
        {/* Logo - 1/4 width */}
        <div className="hidden sm:flex  flex-1  justify-center items-center self-center ">
          <div className="text-[48px]   font-bold text-white tracking-normal">
            FaithTime
          </div>
        </div>

        {/* Contact Us Section - 1/4 width */}
        <div className="flex-1 flex justify-center">
          <div className="text-left">
            <div className="text-[20px]  font-bold md:mb-8 mb-4 text-white">
              Contact Us
            </div>
            <div className="flex flex-col gap-4">
              <ContactLink
                trackName="footer_discord_contact"
                href="https://discord.gg/GDHzvamn7a"
              >
                <DiscordIcon />
                Discord
              </ContactLink>
              <ContactLink
                trackName="footer_telegram_contact"
                href="https://t.me/FaithTimeApp"
              >
                <img
                  src="/telegram-brands-solid.svg"
                  alt="Logo SVG"
                  className="filter invert brightness-100"
                  style={{ width: '24px', height: '24px' }}
                />
                Telegram
              </ContactLink>
            </div>
          </div>
        </div>

        {/* Social Media Section - 1/4 width */}
        <div className="flex-1 flex justify-center">
          <div className="text-left">
            <div className="text-[20px] font-bold md:mb-8 mb-4 text-white">
              Social Media
            </div>
            <div className="flex flex-col gap-4">
              <SocialIcon
                trackName="footer_instagram_social"
                href="https://www.instagram.com/faithtime_app"
              >
                <InstagramIcon />
                Instagram
              </SocialIcon>
              <SocialIcon
                trackName="footer_tiktok_social"
                href="https://www.tiktok.com/@faithtime_app"
              >
                <TiktokIcon />
                TikTok
              </SocialIcon>
              <SocialIcon
                trackName="footer_x_social"
                href="https://x.com/faithtimeapp?s=21"
              >
                <XIcon />
                X
              </SocialIcon>
              <SocialIcon
                trackName="footer_facebook_social"
                href="https://www.facebook.com/faithtimeapp/?rdid=XTf5hxyjc7o3pAdA"
              >
                <FacebookIcon />
                Facebook
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full  flex justify-between items-center px-2 py-3 border-t-1 border-white text-xs">
        <div className="text-white/80">
          ©2025 MetaVibe. All rights reserved.
        </div>
        <div className="flex gap-5">
          <TrackedLink
            trackName="footer_privacy_policy"
            href="#"
            className="text-white/80 no-underline transition-opacity duration-200 ease-in-out hover:opacity-80"
          >
            Privacy Policy
          </TrackedLink>
          <TrackedLink
            trackName="footer_terms_license"
            href="#"
            className="text-white/80 no-underline transition-opacity duration-200 ease-in-out hover:opacity-80"
          >
            Terms & License
          </TrackedLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
