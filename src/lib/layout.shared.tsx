import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export const gitConfig = {
  user: "houseofstake",
  repo: "hos-docs",
  branch: "main",
};

export const repoUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

const mdxDocPaths = new Set([
  "index",
  "governance-system/proposal-and-voting-process",
  "overview/faqs",
]);

export function getDocEditUrl(slugs: string[]) {
  const docPath = slugs.length > 0 ? slugs.join("/") : "index";
  const extension = mdxDocPaths.has(docPath) ? "mdx" : "md";

  return `${repoUrl}/edit/${gitConfig.branch}/content/docs/${docPath}.${extension}`;
}

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
    githubUrl: repoUrl,
    links: [
      {
        text: "Govern HoS",
        url: "https://houseofstake.org",
        icon: <ExternalLink />,
      },
    ],
  };
}
