const navItems = [
  { label: "Home", path: "", key: "home" },
  {
    label: "Proposals",
    path: "/proposals",
    key: "proposals",
  },
  {
    label: "Voters",
    path: "/delegates",
    key: "voters",
  },
  { label: "Assets", path: "/assets", key: "assets" },
];

type HosNavProps = {
  mainSiteUrl: string;
};

export function HosNav({ mainSiteUrl }: HosNavProps) {
  return (
    <nav
      aria-label="House of Stake"
      className="fixed left-1/2 top-0 hidden h-14 -translate-x-1/2 flex-row items-center gap-0.5 lg:flex"
    >
      {navItems.map((item) => {
        return (
          <a
            key={item.key}
            href={`${mainSiteUrl}${item.path}`}
            className="inline-flex h-[34px] items-center justify-center px-4 text-[13px] font-medium leading-[19.5px] text-[#6b6b6b] transition-colors hover:text-fd-primary"
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
