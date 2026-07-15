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
  mainSiteUrl: string;
};

const mainMenuItems = [
  {
    label: "Home",
    path: "",
  },
  {
    label: "Proposals",
    path: "/proposals",
  },
  {
    label: "Voters",
    path: "/delegates",
  },
  {
    label: "Assets",
    path: "/assets",
  },
];

function getMainLinks(mainSiteUrl: string): BaseLayoutProps["links"] {
  return [
    {
      type: "custom",
      on: "menu",
      children: (
        <div className="flex w-full flex-col items-center gap-2">
          {mainMenuItems.map((item) => (
            <a
              key={item.path}
              href={`${mainSiteUrl}${item.path}`}
              className="inline-flex h-9 items-center justify-center px-3 text-[15px] font-medium leading-[20px] text-[#1a1a1b] transition-colors hover:text-fd-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      ),
    },
  ];
}

export function baseOptions({
  showMainNav = false,
  mainSiteUrl,
}: BaseOptionsConfig): BaseLayoutProps {
  return {
    links: showMainNav ? getMainLinks(mainSiteUrl) : undefined,
    nav: {
      url: "/main-site",
      children: showMainNav ? <HosNav mainSiteUrl={mainSiteUrl} /> : null,
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
