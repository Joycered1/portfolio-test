import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";
import NewsGrid from "@/components/news/NewsGrid";

export default function NewsView() {
  return (
    <>
      <Navbar />
      <main>
        <NewsGrid />
      </main>
      <Footer />
    </>
  );
}
