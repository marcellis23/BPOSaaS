import type { Metadata } from "next";
import { PublicInfoPage } from "../../../components/PublicInfoPage";
import { getPublicPage } from "../../../lib/public-pages";

const page = getPublicPage("private-transactions");

export const metadata: Metadata = {
  title: `${page.eyebrow} | BPO Agent Platform`,
  description: page.summary
};

export default function PrivateTransactionsPage() {
  return <PublicInfoPage page={page} />;
}
