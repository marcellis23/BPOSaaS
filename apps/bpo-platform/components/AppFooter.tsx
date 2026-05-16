import Link from "next/link";
import type { User } from "../lib/types";

const publicLinks = [
  { href: "/#mission", label: "Mission" },
  { href: "/seller-services", label: "Seller services" },
  { href: "/buyer-services", label: "Buyer services" },
  { href: "/valuation-support-services", label: "Valuation support" },
  { href: "/#platform", label: "Platform" },
  { href: "/login", label: "Sign in" }
];

const memberLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/reports/new", label: "New report" }
];

export function AppFooter({ user }: { user: User | null }) {
  const links = user ? memberLinks : publicLinks;

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-semibold text-slate-950">BPO Agent Platform</p>
          <p className="mt-1">Structured report workflow for BPO and valuation support professionals.</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="font-medium hover:text-blue-700">
              {link.label}
            </Link>
          ))}
          {user?.role === "owner_admin" ? (
            <Link href="/admin" className="font-medium hover:text-blue-700">
              Admin
            </Link>
          ) : null}
        </nav>
      </div>
    </footer>
  );
}
