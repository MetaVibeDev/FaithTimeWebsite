import React from "react";
import styles from "@/styles/Foot.module.css";
import { siteConfig } from "@/config/site";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <a href="/" className={styles.footerLogo}>
          FaithTime
        </a>
        <a href="/" className={styles.footerLink}>
          Home
        </a>
        <div className={styles.footerContact}>
          <p className={styles.footerContactTitle}>Contact Us</p>
          <a
            href="https://discord.gg/Mc8d5sXDp9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          <a
            href="https://t.me/your_telegram_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </div>
      </div>
      <div className={styles.footerSocialMedia}>
        <p className={styles.footerSocialMediaTitle}>Social Media</p>
        <a
          href="https://www.instagram.com/faithtime_app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img
            src="/MobileApp/ins.png"
            alt="Instagram"
            style={{ width: "12px", height: "12px", marginRight: "5px" }}
          />
          Instagram
        </a>
        <a
          href="https://www.tiktok.com/@faithtime_app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img
            src="/MobileApp/TikTok.png"
            alt="TikTok"
            style={{ width: "12px", height: "12px", marginRight: "5px" }}
          />
          TikTok
        </a>
        <a
          href="https://x.com/FaithtimeApp"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img
            src="/MobileApp/tuite.png"
            alt="Twitter"
            style={{ width: "12px", height: "12px", marginRight: "5px" }}
          />
          X
        </a>
        <a
          href="https://www.facebook.com/your_facebook"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img
            src="/MobileApp/lianshu.png"
            alt="Facebook"
            style={{ width: "12px", height: "12px", marginRight: "5px" }}
          />
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
