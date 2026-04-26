import type{ Article } from "../types/news"
import NewsCard from "./NewCard"

interface NewsGridProps {
  articles: Article[]
}

const NewsGrid = ({ articles }: NewsGridProps) => {
  const validArticles = articles.filter(article => article.title !== "[Removed]")

  if (validArticles.length === 0) return (
    <p className="text-center text-gray-500 italic mt-12">No hay noticias disponibles</p>
  )

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {validArticles.map(article => (
        <NewsCard key={article.url} article={article} />
      ))}
    </div>
  )
}

export default NewsGrid