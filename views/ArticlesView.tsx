import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";
import ArticleGrid from "@/components/articles/ArticleGrid";

export default function ArticlesView() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleGrid />
      </main>
      <Footer />
    </>
  );
}
