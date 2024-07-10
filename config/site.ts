export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "FaithTime App - Journey of Sacred Sites & Prayer",
  description: "Embark on a spiritual adventure with FaithTime, your companion for spiritual journeying through sacred sites and daily devotions. Discover christian sacred places, engage in meditation prayers, and receive a daily bible verse. Our app combines pilgrimage with prayer, offering a unique blend of christian meditations and virtual exploration of christianity's most revered locations. Join our faith community church in this transformative journey.",
  navItems: [
    {
      label: "Mobile",
      href: "/mobile",
    },
    {
      label: "XR",
      href: "/XR",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
