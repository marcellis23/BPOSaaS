import type { Metadata } from "next";
import "./globals.css";
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
        <AppHeader user={user} />
        {children}
      </body>
    </html>
  );
}
