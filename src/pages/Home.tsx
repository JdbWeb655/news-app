import { useState } from "react"
import { useTopHeadlines } from "../hooks/useNews"
import type { Category } from "../types/news"
import NewsGrid from "../components/NewGrid"

const categories: { label: string; value: Category }[] = [
  { label: "General", value: "general" },
  { label: "Tecnología", value: "technology" },
  { label: "Deportes", value: "sports" },
  { label: "Ciencia", value: "science" },
  { label: "Salud", value: "health" },
  { label: "Entretenimiento", value: "entertainment" },
  { label: "Negocios", value: "business" },
]

const Home = () => {
  const [category, setCategory] = useState<Category>("general")
  const { data, isLoading, error } = useTopHeadlines(category)

  const handleCategoryChange = (newCategory: Category) => {
    setCategory(newCategory)
  }

  return (
    <div className="min-h-screen p-6 max-w-6xl mx-auto">
      <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-gray-400 pb-6">
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => handleCategoryChange(cat.value)}
            className={`px-4 py-1 text-xs font-medium tracking-widest uppercase transition-colors border ${
              category === cat.value
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-transparent text-gray-700 border-gray-400 hover:border-gray-900 hover:text-gray-900"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {isLoading && <p className="text-center text-gray-500 italic">Cargando noticias...</p>}
      {error && <p className="text-center text-red-700">Error al cargar noticias</p>}
      {data && <NewsGrid articles={data.articles} />}
    </div>
  )
}

export default Home