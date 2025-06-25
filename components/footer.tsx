import React from 'react';
import { AppStoreIcon, DiscordIcon, InstagramIcon, TiktokIcon } from './icons';

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
    <div className="gap-[84px] pt-[100px] pb-[65px] bg-gradient-to-br from-[#9548FA] to-[#564DDD] w-full  text-white font-sans flex flex-col justify-between items-center">
      {/* Main Header Content */}
      <div className="flex items-start px-10 py-5 flex-1 w-[1000px] h-[230]">
        {/* Logo - 1/4 width */}
        <div className="flex-1 flex justify-center items-center self-center ">
          <div className="text-[48px]  font-bold text-white tracking-normal">
            FaithTime
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <a
            href="#"
            className="text-base font-bold text-white no-underline transition-opacity duration-200 ease-in-out hover:opacity-80"
          >
            Home
          </a>
        </div>

        {/* Contact Us Section - 1/4 width */}
        <div className="flex-1 flex justify-center">
          <div className="text-left">
            <div className="text-base font-bold mb-8 text-white">
              Contact Us
            </div>
            <div className="flex flex-col gap-4">
              <ContactLink href="https://discord.gg/Mc8d5sXDp9">
                Discord
              </ContactLink>
              <ContactLink href="https://t.me/your_telegram_link">
                Telegram
              </ContactLink>
            </div>
          </div>
        </div>

        {/* Social Media Section - 1/4 width */}
        <div className="flex-1 flex justify-center">
          <div className="text-left">
            <div className="text-base font-bold mb-8 text-white">
              Social Media
            </div>
            <div className="flex flex-col gap-4">
              <SocialIcon href="https://www.instagram.com/faithtime_app">
                <InstagramIcon />
                Instagram
              </SocialIcon>
              <SocialIcon href="https://www.tiktok.com/@faithtime_app">
                <TiktokIcon />
                TikTok
              </SocialIcon>
              <SocialIcon href="https://x.com/FaithtimeApp">
                <TiktokIcon />
                X
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/your_facebook">
                <TiktokIcon />
                Facebook
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-[1200px] flex justify-between items-center px-2 py-3 border-t-1 border-white text-xs">
        <div className="text-white/80">
          ©2025 Faith Time. All rights reserved. Privacy Policy. Terms & License.
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