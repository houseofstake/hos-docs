import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sections = [
  {
    title: 'How It Works',
    href: '/docs/governance-system/what-is-venear',
    description:
      "Learn veNEAR, locking, proposal flow, voting, and how governance changes over time.",
  },
  {
    title: 'Roles and Accountability',
    href: '/docs/structure/delegates-and-participants',
    description:
      "Understand delegates, the Screening Committee, the Security Council, and who is responsible for what.",
  },
  {
    title: 'Formal Documents',
    href: '/docs/structure/legal-documents/bylaws',
    description:
      "Read the constitution, bylaws, and other formal reference material when you need the exact source text.",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative flex min-h-dvh w-full flex-col overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[url('/home-hero-bg.webp')] bg-[length:760px_auto] bg-[position:18%_54%] bg-no-repeat opacity-[0.72] mix-blend-multiply sm:bg-[length:1080px_auto] sm:bg-[position:68%_58%] xl:bg-[length:1220px_auto]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[78%] max-w-[700px] bg-gradient-to-r from-white/88 via-white/42 to-transparent sm:w-[48%]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-[1440px] flex-1 flex-col justify-between px-3 pb-3 pt-[calc(3.5rem+2rem)] sm:px-8 sm:pb-10 sm:pt-[calc(3.5rem+2.5rem)] lg:flex-row lg:items-center lg:justify-between lg:gap-[52px] lg:py-14">
          <div className="flex min-w-0 max-w-[754.688px] flex-col max-sm:pt-4 lg:max-w-none lg:flex-1">
            <h1 className="text-balance font-inter text-[38px] font-bold leading-[43px] tracking-[-0.76px] text-[#1a1a1b] sm:text-[32px] sm:leading-[38px] sm:tracking-[-0.64px] md:text-[40px] md:leading-[44px] md:tracking-[-0.8px] lg:text-[52px] lg:leading-[55.64px] lg:tracking-[-1.56px]">
              House of Stake
              <span className="block text-fd-primary">Documentation</span>
            </h1>
            <p className="mt-4 max-w-[428px] font-inter text-[17px] font-normal leading-[27px] text-[#6b6b6b] sm:mt-5 sm:text-[13px] sm:leading-[21px]">
              Clear docs for NEAR governance: proposals, voting, delegation,
              roles, and formal process.
            </p>
            <div className="mt-10 flex flex-row items-center gap-3 sm:mt-8 sm:flex-wrap sm:items-start">
              <Link
                href="/docs"
                className="inline-flex h-[41.98px] min-h-[41.98px] min-w-0 flex-1 items-center justify-center overflow-hidden rounded-full bg-fd-primary px-3 py-[12.11px] text-center font-inter text-[14px] font-bold leading-none text-white shadow-[inset_0_0_0_1.111px_#66023c] transition-colors hover:bg-fd-primary/90 sm:w-[220px] sm:flex-none sm:px-[27.11px]"
              >
                Start Here
              </Link>
              <Link
                href="/docs/governance-system/what-is-venear"
                className="inline-flex h-[41.98px] min-h-[41.98px] min-w-0 flex-1 items-center justify-center overflow-hidden rounded-full border border-transparent bg-white/20 px-3 py-[12.11px] text-center font-inter text-[14px] font-bold leading-none text-[#1a1a1b] shadow-[inset_0_0_0_1.111px_#1a1a1b] transition-colors hover:bg-white/35 hover:text-fd-primary hover:shadow-[inset_0_0_0_1.111px_#66023c] sm:w-[220px] sm:flex-none sm:px-[27.11px]"
              >
                Learn How It Works
              </Link>
            </div>
          </div>

          <div className="mt-auto flex w-full max-w-none shrink-0 flex-col gap-3 lg:mt-0 lg:max-w-[390px] xl:max-w-[420px]">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group relative flex min-h-[132px] flex-col rounded-[14px] border-l-[2.222px] border-fd-primary bg-white/45 pb-[22px] pl-[22px] pr-10 pt-[22px] text-left shadow-[0px_4px_28px_0px_rgba(102,2,60,0.07),inset_0px_1px_0px_0px_rgba(255,255,255,0.85)] backdrop-blur-[2px] transition-transform hover:-translate-y-0.5"
              >
                <h2 className="max-w-[320px] font-inter text-[20px] font-bold leading-[24px] tracking-[-0.2px] text-[#1a1a1b]">
                  {section.title}
                </h2>
                <p className="mt-[8px] font-mono text-[12px] font-normal leading-[18px] text-[#1a1a1b] opacity-[0.65]">
                  {section.description}
                </p>
                <ArrowRight className="absolute right-5 top-6 h-[16.5px] w-[22px] text-[#1a1a1b] opacity-70 transition-colors group-hover:text-fd-primary group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
