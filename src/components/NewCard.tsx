import { useNavigate } from "react-router-dom"
import type { Article } from "../types/news"

interface NewsCardProps {
  article: Article
}

const NewsCard = ({ article }: NewsCardProps) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/news?url=${encodeURIComponent(article.url)}`)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-AR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })
  }

  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer border-b border-gray-300 pb-4 hover:opacity-75 transition-opacity"
    >
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-cover mb-3 grayscale hover:grayscale-0 transition-all"
        />
      )}
      <p className="text-red-700 text-xs font-bold tracking-widest uppercase mb-1">
        {article.source.name}
      </p>
      <h3 className="font-bold text-lg leading-snug mb-2" style={{ fontFamily: "Georgia, serif" }}>
        {article.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
        {article.description}
      </p>
      <p className="text-gray-400 text-xs mt-2 italic">{formatDate(article.publishedAt)}</p>
    </div>
  )
}

export default NewsCard