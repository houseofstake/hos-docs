import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { ExternalLink } from "lucide-react";

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: "houseofstake",
  repo: "hos-docs",
  branch: "main",
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "House of Stake",
    },
    themeSwitch: {
      enabled: false,
    },
    githubUrl: `https://github.com/houseofstake`,
    links: [
      {
        text: "Govern HoS",
        url: "https://gov.houseofstake.org",
        icon: <ExternalLink />,
      },
    ],
  };
}
