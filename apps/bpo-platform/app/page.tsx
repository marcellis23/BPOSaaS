import Image from "next/image";
import Link from "next/link";
import { getCurrentUser } from "../lib/auth";

const heroImageUrl =
  "https://images.unsplash.com/photo-1770199105692-9e52ff137cad?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=75&w=2400";

const audienceGroups = [
  {
    title: "Buyers and sellers",
    text: "People making real estate decisions deserve more than guesswork. BPO agents help organize condition, market activity, comparable sales, repair needs, and pricing logic before the stakes get expensive."
  },
  {
    title: "Professional advisors",
    text: "Attorneys, investors, appraisers, lenders, AMCs, and other professionals often need market context or valuation support to help clients make decisions about real property holdings."
  },
  {
    title: "BPO-focused agents",
    text: "Agents need a place to sharpen valuation skills, build repeatable report workflows, collaborate with peers, and grow into stronger real estate valuation professionals."
  }
];

const servicePaths = [
  {
    title: "Seller Services",
    href: "/seller-services",
    text: "Evaluate as-is value, repair options, mortgage default risk, inherited property decisions, and private transaction fairness."
  },
  {
    title: "Buyer Services",
    href: "/buyer-services",
    text: "Bring due diligence forward for value-focused purchases, investors, long-term holds, and lot development opportunities."
  },
  {
    title: "Valuation Support Services",
    href: "/valuation-support-services",
    text: "Support AMCs, appraisers, agents, attorneys, advisors, lenders, and other professionals with market-grounded documentation."
  }
];

const platformPillars = [
  "Structured web forms for BPO, PCR, MAR, CMA, reconciliation, photos, disclosures, and report assembly.",
  "Shared property data that follows the report so agents stop retyping the same facts across every section.",
  "A member workspace designed to help agents create consistent, client-ready valuation support packages."
];

export default async function HomePage() {
  const user = await getCurrentUser();

  return (
    <main>
      <section className="relative isolate flex min-h-[72vh] items-end overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <Image
          src={heroImageUrl}
          alt="Real estate professional holding keys and a clipboard"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-slate-950/70" />
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">Broker Price Opinion agents</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Helping real estate decisions move from uncertainty to informed judgment.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
            This project exists to educate the public about the value BPO agents bring to real estate due diligence, valuation support, and professional decision-making around property holdings.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#mission" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-blue-50">
              Explore the mission
            </Link>
            <Link href={user ? "/dashboard" : "/login"} className="rounded-md border border-white/50 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
              {user ? "Open workspace" : "Member sign in"}
            </Link>
          </div>
          <a
            href="https://unsplash.com/photos/woman-in-suit-holding-keys-and-a-clipboard-E5iwKLsLdyY"
            className="mt-10 inline-block text-xs text-slate-300 hover:text-white"
          >
            Photo by Aleksandra Sapozhnikova on Unsplash
          </a>
        </div>
      </section>

      <section id="mission" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Mission</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Make valuation support more understandable, more practical, and more available.
            </h2>
          </div>
          <div className="mt-8 grid gap-8 text-lg leading-8 text-slate-600 lg:grid-cols-2">
            <p>
              BPO agents serve an important role in the real estate sector by collecting local market intelligence, observing property condition, organizing comparable evidence, and explaining how a property fits within its market.
            </p>
            <p>
              The goal is not to replace appraisers, attorneys, lenders, inspectors, or agents of record. The goal is to strengthen due diligence with clear, condition-aware, market-grounded information that helps people ask better questions before making critical decisions.
            </p>
          </div>
        </div>
      </section>

      <section id="who-we-serve" className="bg-slate-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Who we serve</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A common language for people who need property value clarity.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {audienceGroups.map((group) => (
              <article key={group.title} className="card p-6">
                <h3 className="text-lg font-bold text-slate-950">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{group.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Information pages</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Learn how BPO support applies to different real estate decisions.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {servicePaths.map((service) => (
              <Link key={service.href} href={service.href} className="card block p-6 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                <h3 className="text-lg font-bold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-blue-700">Read more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">The platform</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Tools for agents who want to produce better valuation support reports.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The member workspace turns valuation work into a repeatable process: create a property project, complete report sections, preserve shared property facts, and export a client-ready package.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={user ? "/dashboard" : "/login"} className="rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-800">
                {user ? "Go to dashboard" : "Access member workspace"}
              </Link>
              {user ? (
                <Link href="/reports/new" className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50">
                  New report
                </Link>
              ) : null}
            </div>
          </div>
          <div className="grid gap-4">
            {platformPillars.map((pillar, index) => (
              <article key={pillar} className="card flex gap-4 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-700 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-700">{pillar}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
