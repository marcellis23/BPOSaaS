import type { Metadata } from "next";
import { PublicInfoPage } from "../../../components/PublicInfoPage";
import { getPublicPage } from "../../../lib/public-pages";

const page = getPublicPage("value-focused-buyers");

export const metadata: Metadata = {
  title: `${page.eyebrow} | BPO Agent Platform`,
  description: page.summary
};

export default function ValueFocusedBuyersPage() {
  return <PublicInfoPage page={page} />;
}
