import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export const gitConfig = {
  user: "houseofstake",
  repo: "hos-docs",
  branch: "main",
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-3 text-sm font-semibold text-fd-foreground">
          <Image
            src="/logo.svg"
            alt="House of Stake logo"
            width={28}
            height={28}
            className="h-7 w-7"
            priority
          />
          <span className="tracking-tight">House of Stake</span>
        </span>
      ),
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
