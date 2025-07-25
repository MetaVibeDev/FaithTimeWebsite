import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      white: "from-[#FFFFFF] to-[#FFFFFF]",
      violet:
        "from-pink-400 to-secondary-500 dark: from-pink-500 dark:to-secondary-500",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#5EA2EF]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      primary: "text-secondary-400 dark:text-secondary-500 font-normal",
      foreground:
        "from-[#000000] to-[#808080] dark:from-[#FFFFFF] dark:to-[#808080]",
    },
    size: {
      xs: "text-2xl lg:text-3xl",
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-5xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "white",
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    color: {
      white: "text-white",
    },
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
  compoundVariants: [
    {
      color: ["white"],
    },
  ],
});
