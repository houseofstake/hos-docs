import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-20">
      <div className="max-w-3xl space-y-8">
        <h1 className="font-inter text-4xl font-bold tracking-tight sm:text-6xl text-fd-foreground">
          House of Stake Documentation
        </h1>
        <p className="font-inter text-lg text-fd-muted-foreground max-w-2xl mx-auto">
          The official documentation for House of Stake. Learn how to govern, propose, and interact with the protocol.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-full bg-fd-primary px-8 py-3 text-sm font-medium text-fd-primary-foreground hover:opacity-90 transition-opacity"
          >
            Read the Docs
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

      <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-5xl mx-auto text-left">
        <div className="rounded-xl border border-fd-border bg-white p-6 shadow-sm">
          <h2 className="font-inter text-xl font-semibold mb-2 text-fd-foreground">Governance</h2>
          <p className="text-sm text-fd-muted-foreground">
            Understand the governance process, how to create proposals, and the voting lifecycle.
          </p>
        </div>
        <div className="rounded-xl border border-fd-border bg-white p-6 shadow-sm">
          <h2 className="font-inter text-xl font-semibold mb-2 text-fd-foreground">Integration</h2>
          <p className="text-sm text-fd-muted-foreground">
            Technical guides for integrating with the House of Stake smart contracts and APIs.
          </p>
        </div>
        <div className="rounded-xl border border-fd-border bg-white p-6 shadow-sm">
          <h2 className="font-inter text-xl font-semibold mb-2 text-fd-foreground">Resources</h2>
          <p className="text-sm text-fd-muted-foreground">
            Access brand assets, style guides, and other resources for the House of Stake ecosystem.
          </p>
        </div>
      </div>
    </main>
  );
}
