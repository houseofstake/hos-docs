import Link from 'next/link';

const sections = [
  {
    title: 'Start Here',
    href: '/docs',
    description: 'Begin with the simplest explanation of what House of Stake is, why it exists, and the first pages to read.',
  },
  {
    title: 'How It Works',
    href: '/docs/governance-system/what-is-venear',
    description: 'Learn veNEAR, locking, proposal flow, voting, and how governance changes over time.',
  },
  {
    title: 'Roles and Accountability',
    href: '/docs/structure/delegates-and-participants',
    description: 'Understand delegates, the Screening Committee, the Security Council, and who is responsible for what.',
  },
  {
    title: 'Formal Documents',
    href: '/docs/structure/legal-documents/bylaws',
    description: 'Read the constitution, bylaws, and other formal reference material when you need the exact source text.',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 py-20 text-center">
      <div className="max-w-3xl space-y-8">
        <h1 className="font-inter text-4xl font-bold tracking-tight sm:text-6xl text-fd-foreground">
          House of Stake Documentation
        </h1>
        <p className="font-inter text-lg text-fd-muted-foreground max-w-2xl mx-auto">
          Clear documentation for understanding House of Stake, from the basics to the formal governance details.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-full bg-fd-primary px-8 py-3 text-sm font-medium text-fd-primary-foreground hover:opacity-90 transition-opacity"
          >
            Start Here
          </Link>
          <Link
            href="/docs/governance-system/what-is-venear"
            className="inline-flex items-center justify-center rounded-full bg-white border border-fd-border px-8 py-3 text-sm font-medium text-fd-foreground hover:bg-fd-muted transition-colors shadow-sm"
          >
            Learn How It Works
          </Link>
          <a
            href="https://gov.houseofstake.org"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white border border-fd-border px-8 py-3 text-sm font-medium text-fd-foreground hover:bg-fd-muted transition-colors shadow-sm"
          >
            Govern HoS
          </a>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-6 max-w-5xl mx-auto text-left sm:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="rounded-xl border border-fd-border bg-white p-6 shadow-sm transition-colors hover:bg-fd-muted/40"
          >
            <h2 className="mb-2 font-inter text-xl font-semibold text-fd-foreground">{section.title}</h2>
            <p className="text-sm text-fd-muted-foreground">{section.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
