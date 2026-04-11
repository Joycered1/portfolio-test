import type { Metadata } from "next";
import NewsView from "@/views/NewsView";

export const metadata: Metadata = {
  title: "News — Joyce Eboh",
  description:
    "Career updates from Joyce Eboh — speaking engagements, mentorship, community leadership, and milestones in her journey as a senior product designer.",
};

export default function NewsPage() {
  return <NewsView />;
}
