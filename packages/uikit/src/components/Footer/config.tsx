import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, FacebookIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks = [
  {
    label: "Analytics",
    href: "info",
  },
  {
    label: "Audit",
    href: "#",
  },
  {
    label: "Docs",
    href: "https://doc.smexswap.com",
  },
  {
    label: "Referral Program",
    href: "referral",
  },
  {
    label: "Apply For Pool",
    href: "https://forms.gle/dPnvXiH469nnGywg7",
  },
  {
    label: "Apply For Farm",
    href: "https://forms.gle/LYGDD8Dr1WpN3bht9",
  },

  

  
  // {
  //   label: "Help",
  //   items: [
  //     {
  //       label: "Customer",
  //       href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
  //     },
  //     {
  //       label: "Troubleshooting",
  //       href: "https://docs.pancakeswap.finance/help/troubleshooting",
  //     },
  //     {
  //       label: "Guides",
  //       href: "https://docs.pancakeswap.finance/get-started",
  //     },
  //   ],
  // },
  // {
  //   label: "Developers",
  //   items: [
  //     {
  //       label: "Github",
  //       href: "https://github.com/pancakeswap",
  //     },
  //     {
  //       label: "Documentation",
  //       href: "https://docs.pancakeswap.finance",
  //     },
  //     {
  //       label: "Bug Bounty",
  //       href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
  //     },
  //     {
  //       label: "Audits",
  //       href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
  //     },
  //     {
  //       label: "Careers",
  //       href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
  //     },
  //   ],
  // },
];

export const socials = [
  {
    label: "Facebook",
    icon: FacebookIcon,
    href: "#",
  },
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/SmexSwap",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href: "https://t.me/smexswap",
  },
  // {
  //   label: "Telegram",
  //   icon: TelegramIcon,
  //   items: [
  //     {
  //       label: "English",
  //       href: "https://t.me/smexswap",
  //     },
  //     {
  //       label: "Bahasa Indonesia",
  //       href: "https://t.me/PancakeSwapIndonesia",
  //     },
  //     {
  //       label: "中文",
  //       href: "https://t.me/PancakeSwap_CN",
  //     },
  //     {
  //       label: "Tiếng Việt",
  //       href: "https://t.me/PancakeSwapVN",
  //     },
  //     {
  //       label: "Italiano",
  //       href: "https://t.me/pancakeswap_ita",
  //     },
  //     {
  //       label: "русский",
  //       href: "https://t.me/pancakeswap_ru",
  //     },
  //     {
  //       label: "Türkiye",
  //       href: "https://t.me/pancakeswapturkiye",
  //     },
  //     {
  //       label: "Português",
  //       href: "https://t.me/PancakeSwapPortuguese",
  //     },
  //     {
  //       label: "Español",
  //       href: "https://t.me/PancakeswapEs",
  //     },
  //     {
  //       label: "日本語",
  //       href: "https://t.me/pancakeswapjp",
  //     },
  //     {
  //       label: "Français",
  //       href: "https://t.me/pancakeswapfr",
  //     },
  //     {
  //       label: "Datch",
  //       href: "https://t.me/PancakeSwap_DE",
  //     },
  //     {
  //       label: "Filipino",
  //       href: "https://t.me/Pancakeswap_Ph",
  //     },
  //     {
  //       label: "ქართული ენა",
  //       href: "https://t.me/PancakeSwapGeorgia",
  //     },
  //     {
  //       label: "Announcements",
  //       href: "https://t.me/PancakeSwapAnn",
  //     },
  //   ],
  // },
  // {
  //   label: "Reddit",
  //   icon: RedditIcon,
  //   href: "https://reddit.com/r/pancakeswap",
  // },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/smexswap",
  },
  // {
  //   label: "Github",
  //   icon: GithubIcon,
  //   href: "https://github.com/smexswap",
  // },
  // {
  //   label: "Discord",
  //   icon: DiscordIcon,
  //   href: "https://discord.gg/pancakeswap",
  // },
  // {
  //   label: "Medium",
  //   icon: MediumIcon,
  //   href: "https://pancakeswap.medium.com/",
  // },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));