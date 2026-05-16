import Link from "next/link";
import type { InfoPage } from "../lib/public-pages";
import { getPageUrl, getPublicPage } from "../lib/public-pages";

function RelatedPages({ page }: { page: InfoPage }) {
  if (!page.childSlugs?.length) return null;

  return (
    <section className="bg-slate-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Explore more</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Focused situations and service paths</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {page.childSlugs.map((slug) => {
            const child = getPublicPage(slug);
            return (
              <Link key={slug} href={getPageUrl(child)} className="card block p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                <h3 className="font-bold text-slate-950">{child.eyebrow}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{child.summary}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PublicInfoPage({ page }: { page: InfoPage }) {
  const parent = page.parentSlug ? getPublicPage(page.parentSlug) : null;

  return (
    <main>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            {parent ? (
              <Link href={getPageUrl(parent)} className="text-sm font-semibold text-blue-700 hover:text-blue-800">
                {parent.eyebrow}
              </Link>
            ) : (
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">{page.eyebrow}</p>
            )}
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">{page.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{page.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={page.ctaHref} className="rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-800">
                {page.ctaLabel}
              </Link>
              <Link href="/login" className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50">
                Member workspace
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          {page.intro.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-slate-100">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {page.cards.map((card) => (
              <article key={card.title} className="card p-6">
                <h2 className="text-lg font-bold text-slate-950">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{page.supportTitle}</h2>
          <p className="mt-5 text-lg leading-8 text-blue-50">{page.supportText}</p>
          <div className="mt-8 flex justify-center">
            <Link href={page.ctaHref} className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-800 shadow-sm hover:bg-blue-50">
              {page.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <RelatedPages page={page} />
    </main>
  );
}
