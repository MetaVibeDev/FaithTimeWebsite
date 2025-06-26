import React from "react";
import { AppStoreIcon, DiscordIcon, InstagramIcon, TiktokIcon } from "./icons";

interface SocialIconProps {
  children: React.ReactNode;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ children, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex font-semibold text-[16px] items-center font no-underline gap-1.5 transition-opacity duration-200 ease-in-out whitespace-nowrap hover:opacity-80"
  >
    {children}
  </a>
);

interface ContactLinkProps {
  children: React.ReactNode;
  href: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ children, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-[16px]  text-white no-underline transition-opacity duration-200 ease-in-out block whitespace-nowrap hover:opacity-80"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <div className="md:gap-[84px] gap-8 md:pt-[100px] pt-8  md:pb-[65px] pb-8 bg-gradient-to-br from-[#9548FA] to-[#564DDD] w-full  text-white font-sans flex flex-col justify-between items-center">
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
            <div className="text-base font-bold md:mb-8 mb-4 text-white">
              Contact Us
            </div>
            <div className="flex flex-col gap-4">
              <ContactLink href="https://discord.gg/GDHzvamn7a">
                Discord
              </ContactLink>
              <ContactLink href="https://t.me/FaithTimeApp">
                Telegram
              </ContactLink>
            </div>
          </div>
        </div>

        {/* Social Media Section - 1/4 width */}
        <div className="flex-1 flex justify-center">
          <div className="text-left">
            <div className="text-base font-bold md:mb-8 mb-4 text-white">
              Social Media
            </div>
            <div className="flex flex-col gap-4">
              <SocialIcon href="https://www.instagram.com/faithtime_app">
                <img
                  src="/MobileApp/ins.png" // 注意：要去掉"/public"前缀
                  alt="Instagram"
                  className="w-6 h-6"
                />
                Instagram
              </SocialIcon>
              <SocialIcon href="https://www.tiktok.com/@faithtime_app">
                <img
                  src="/MobileApp/TikTok.png" // 注意：要去掉"/public"前缀
                  alt="TikTok"
                  className="w-6 h-6"
                />
                TikTok
              </SocialIcon>
              <SocialIcon href="https://x.com/faithtimeapp?s=21">
                <img
                  src="/MobileApp/tuite.png" // 注意：要去掉"/public"前缀
                  alt="X (Twitter)"
                  className="w-6 h-6"
                />
                X
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/faithtimeapp/?rdid=XTf5hxyjc7o3pAdA">
                <img
                  src="/MobileApp/facebook.png" // 注意：要去掉"/public"前缀
                  alt="X (Twitter)"
                  className="w-6 h-6"
                />
                Facebook
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-[1200px] flex justify-between items-center px-2 py-3 border-t-1 border-white text-xs">
        <div className="text-white/80">
          ©2025 Faith Time. All rights reserved. Privacy Policy. Terms &
          License.
        </div>
        <div className="flex gap-5">
          <a
            href="/privacy_policy.html"
            className="text-white/80 no-underline transition-opacity duration-200 ease-in-out hover:opacity-80"
          >
            Privacy Policy
          </a>
          <a
            href="/terms_of_service.html"
            className="text-white/80 no-underline transition-opacity duration-200 ease-in-out hover:opacity-80"
          >
            Terms & License
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
