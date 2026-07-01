"use client";

const navItems = [
  { label: "Home", href: "https://houseofstake.org", key: "home" },
  {
    label: "Proposals",
    href: "https://houseofstake.org/proposals",
    key: "proposals",
  },
  {
    label: "Voters",
    href: "https://houseofstake.org/delegates",
    key: "voters",
  },
  { label: "Assets", href: "https://houseofstake.org/assets", key: "assets" },
];

export function HosNav() {
  return (
    <nav
      aria-label="House of Stake"
      className="fixed left-1/2 top-0 hidden h-14 -translate-x-1/2 flex-row items-center gap-0.5 lg:flex"
    >
      {navItems.map((item) => {
        return (
          <a
            key={item.key}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-[34px] items-center justify-center px-4 text-[13px] font-medium leading-[19.5px] text-[#6b6b6b] transition-colors hover:text-fd-primary"
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
