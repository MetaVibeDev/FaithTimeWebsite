import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { UUIDProvider } from "@/components/userinfo";

// 将 NavbarWrapper 移动到单独的客户端组件文件中
import { NavbarWrapper } from "@/components/navbar-wrapper";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/FaithTime.logo.round.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta
          content="VUnM5YuI09m5zxQfW9K8D67jmRsE_LLQgkgL-sB6wUM"
          name="google-site-verification"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <UUIDProvider>
            <NavbarWrapper>
              <main className="flex-grow">{children}</main>
            </NavbarWrapper>
            {/* 
            <footer className="w-full flex items-center justify-center relative flex-col px-10 py-3">
              <p className="text-gray-500 text-sm">
                © 2025 MetaVibe. All rights reserved.
              </p>
            </footer> */}
          </UUIDProvider>
        </Providers>
      </body>
    </html>
  );
}
