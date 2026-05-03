import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useTopHeadlines } from "../features/news/useNews"
import { ErrorMessage } from "../shared/components/ErrorMessage"
import NewGrid from "../features/news/NewGrid"
import SkeletonGrid from "../shared/components/SkeletonGrid"
import type { Category } from "../features/news/news"
import { CATEGORIES, CATEGORY_LABELS } from "../features/news/constants";
import { fetchTopHeadlines } from "../features/api/newsApi";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const currentCategory = (searchParams.get("category") as Category) || "technology";

  const { data: articles, isLoading, isError } = useTopHeadlines(currentCategory);

  useEffect(() => {
    document.title = `${CATEGORY_LABELS[currentCategory]} | The News Times`;
  }, [currentCategory]);

  const handleCategoryChange = (cat: Category) => {
    setSearchParams({ category: cat });
  };

  const prefetchCategory = (cat: Category) => {
    queryClient.prefetchQuery({
      queryKey: ["headlines", cat],
      queryFn: () => fetchTopHeadlines(cat),
      staleTime: 1000 * 60 * 5,
    });
  };

  if (isLoading && !articles) return <SkeletonGrid />;
  if (isError) return <ErrorMessage />;

  return (
    <div className="p-6 max-w-7xl mx-auto animate-vintage">
      {/* Selector de Categorías Estilo "Columnas" */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 border-y border-black py-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            onMouseEnter={() => prefetchCategory(cat)}
            className={`vintage-btn ${currentCategory === cat ? "active" : ""}`}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>
      
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 flex-grow bg-black"></div>
          <h2 className="text-4xl md:text-6xl font-black text-center px-4 uppercase ink-effect" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Sección: {CATEGORY_LABELS[currentCategory]}
          </h2>
          <div className="h-1 flex-grow bg-black"></div>
        </div>
        
        <NewGrid articles={articles ?? []} />
      </div>

      {/* Footer Estilo Pie de Página de Diario */}
      <div className="mt-20 border-t-2 border-black pt-8 pb-12 text-center opacity-70">
        <p className="text-[10px] font-black uppercase tracking-[0.3em]">
          Fin de la Edición Actual • © 2026 The News Times Corporation
        </p>
      </div>
    </div>
  );
};

export default Home;