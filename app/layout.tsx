import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "./providers";
import Footer from "@/components/footer";
import { siteConfig } from "@/config/site";

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
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K138KE5KKZ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K138KE5KKZ');
            `,
          }}
        />
      </head>
      <body
        className={clsx("min-h-screen bg-background font-sans antialiased")}
      >
        <UUIDProvider>
          <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
            <main className="flex-grow">
              {children}
              <Analytics />
            </main>
          </Providers>
        </UUIDProvider>
      </body>
    </html>
  );
}
