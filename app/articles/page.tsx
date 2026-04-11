import type { Metadata } from "next";
import ArticlesView from "@/views/ArticlesView";

export const metadata: Metadata = {
  title: "Articles — Joyce Eboh",
  description:
    "Design articles by Joyce Eboh on inclusive design, design systems, Web3 UX, and design thinking methodology — published on Medium's Design Bootcamp.",
};

export default function ArticlesPage() {
  return <ArticlesView />;
}
