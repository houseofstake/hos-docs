import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { HosNav } from "@/components/hos-nav";
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

type BaseOptionsConfig = {
  showMainNav?: boolean;
};

const mainMenuItems = [
  {
    label: "Home",
    href: "https://houseofstake.org",
  },
  {
    label: "Proposals",
    href: "https://houseofstake.org/proposals",
  },
  {
    label: "Voters",
    href: "https://houseofstake.org/delegates",
  },
  {
    label: "Assets",
    href: "https://houseofstake.org/assets",
  },
];

const mainLinks: BaseLayoutProps["links"] = [
  {
    type: "custom",
    on: "menu",
    children: (
      <div className="flex w-full flex-col items-center gap-2">
        {mainMenuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center justify-center px-3 text-[15px] font-medium leading-[20px] text-[#1a1a1b] transition-colors hover:text-fd-primary"
          >
            {item.label}
          </a>
        ))}
      </div>
    ),
  },
];

export function baseOptions({
  showMainNav = false,
}: BaseOptionsConfig = {}): BaseLayoutProps {
  return {
    links: showMainNav ? mainLinks : undefined,
    nav: {
      url: "https://houseofstake.org",
      children: showMainNav ? <HosNav /> : null,
      title: (
        <span className="flex min-w-0 items-center gap-2">
          <Image
            src="/hos-logo.svg"
            alt="House of Stake logo"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
            priority
          />
          <span className="truncate text-sm font-bold text-fd-primary sm:text-base">
            House of Stake
          </span>
        </span>
      ),
    },
    themeSwitch: {
      enabled: false,
    },
    githubUrl: repoUrl,
  };
}
