import type { Metadata } from "next";
import "./globals.css";
import { AppFooter } from "../components/AppFooter";
import { AppHeader } from "../components/AppHeader";
import { getCurrentUser } from "../lib/auth";

export const metadata: Metadata = {
  title: "BPO Agent Platform",
  description: "Member-facing report workflow for BPO agents and valuation support professionals."
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const user = await getCurrentUser();
  return (
    <html lang="en">
      <body>
        <div className="app-frame">
          <AppHeader user={user} />
          <div className="app-content">{children}</div>
          <AppFooter user={user} />
        </div>
      </body>
    </html>
  );
}
