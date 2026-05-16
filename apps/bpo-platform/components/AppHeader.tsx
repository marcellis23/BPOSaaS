import Link from "next/link";
import { logoutAction } from "../app/actions";
import type { User } from "../lib/types";
import { SubmitButton } from "./SubmitButton";

const publicNavLinks = [
  { href: "/#mission", label: "Mission" },
  { href: "/seller-services", label: "Sellers" },
  { href: "/buyer-services", label: "Buyers" },
  { href: "/valuation-support-services", label: "Professionals" },
  { href: "/bpo-agents", label: "BPO Agents" },
  { href: "/#platform", label: "Platform" }
];

export function AppHeader({ user }: { user: User | null }) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-base font-bold tracking-tight text-slate-950">
          BPO Agent Platform
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          {user ? (
            <>
              <Link href="/" className="hidden font-medium text-slate-700 hover:text-blue-700 sm:inline">
                Home
              </Link>
              <Link href="/dashboard" className="font-medium text-slate-700 hover:text-blue-700">
                Dashboard
              </Link>
              {user.role === "owner_admin" ? (
                <Link href="/admin" className="font-medium text-slate-700 hover:text-blue-700">
                  Admin
                </Link>
              ) : null}
              <span className="hidden text-slate-500 sm:inline">{user.name}</span>
              <form action={logoutAction}>
                <SubmitButton variant="secondary">Sign out</SubmitButton>
              </form>
            </>
          ) : (
            <>
              <div className="hidden items-center gap-4 md:flex">
                {publicNavLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="font-medium text-slate-700 hover:text-blue-700">
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link href="/login" className="rounded-md bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800">
                Sign in
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
