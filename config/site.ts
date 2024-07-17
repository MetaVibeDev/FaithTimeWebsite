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
    // {
    //   label: "Profile",
    //   href: "/profile",
    // },
    // {
    //   label: "Dashboard",
    //   href: "/dashboard",
    // },
    // {
    //   label: "Projects",
    //   href: "/projects",
    // },
    // {
    //   label: "Team",
    //   href: "/team",
    // },
    // {
    //   label: "Calendar",
    //   href: "/calendar",
    // },
    // {
    //   label: "Settings",
    //   href: "/settings",
    // },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    // {
    //   label: "Logout",
    //   href: "/logout",
    // },
  ],
  links: {
    // social medias
    discord: "https://discord.gg/Mc8d5sXDp9",
    twitter: "https://x.com/FaithtimeApp",
    instagram: "https://www.instagram.com/faithtimelab",
    // mobile stores
    appStore: "#",
    googlePlay: "#",
    // XR stores
    visionProStore: "https://apps.apple.com/app/faithtime/id6503560893?platform=vision",
    metaQuestStore: "https://www.meta.com/experiences/7932069240179240/",
    // other
    github: "https://github.com/nextui-org/nextui",
    docs: "https://nextui.org",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  slideImageAndText: [
    {
      src: "/MobileApp/AppPreview.01.png",
      title: "Daily Sacred Sites",
      content: " \
        Embark on a spiritual journey with FaithTime. \
        Explore sacred sites, engage in daily devotions and meditation prayers. \
        Receive a daily bible verse and experience christian meditations through virtual exploration of christianity's revered locations. \
        ",
    },
    {
      src: "/MobileApp/AppPreview.04.png",
      title: "Sacred Sites Details",
      content: " \
        Discover christianity religion history through sacred sites. \
        Learn about churches and faith centers in our religion. \
        Connect with the church of Jesus Christ through suggested prayers to deepen your faith.\
        ",
    },
    {
      src: "/MobileApp/AppPreview.03.png",
      title: "Daily Scripture",
      content: " \
        Start your day with this feature, which offers a bible verse of the day for daily devotion on prayer or bible study. \
        Find scriptures on faith or prayers before bed for your christian journey. \
        ",
    },
    {
      src: "/MobileApp/AppPreview.02.png",
      title: "Calender",
      content: "\
        Track spiritual growth with our Calendar. \
        Encourage devotions and mindfulness meditation, maintaining your connection with Jesus Christ and commitment to faith and family. \
        ",
    },
  ]
};
