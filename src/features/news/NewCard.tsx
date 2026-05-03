import { useNavigate } from "react-router-dom"
import type { Article } from "../news/news"
import { useFavorites } from "../../shared/hooks/useFavorites"

interface NewsCardProps {
  article: Article
}

const NewsCard = ({ article }: NewsCardProps) => {
  const navigate = useNavigate()
  const { toggleFavorite, isFavorite } = useFavorites()

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

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.description,
        url: article.url,
      })
    } else {
      navigator.clipboard.writeText(article.url)
      alert("Enlace copiado al portapapeles")
    }
  }

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation()
    toggleFavorite(article)
  }

  return (
    <div
      onClick={handleNavigate}
      className="group cursor-pointer flex flex-col h-full border border-black p-4 bg-transparent hover:bg-white/50 transition-all duration-300 relative shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
    >
      <div className="relative overflow-hidden mb-4 border border-black p-1">
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt={article.title}
            loading="lazy"
            className="w-full h-56 object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 transition-all duration-700"
          />
        ) : (
          <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-400 font-serif italic border border-dashed border-gray-400">
            [Ilustración no disponible]
          </div>
        )}
        
        {/* Badges Retro */}
        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={handleFavorite}
            className="w-8 h-8 flex items-center justify-center bg-white border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:scale-110 transition-all"
          >
            {isFavorite(article.url) ? "★" : "☆"}
          </button>
          <button 
            onClick={handleShare}
            className="w-8 h-8 flex items-center justify-center bg-white border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:scale-110 transition-all"
          >
            ➦
          </button>
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex justify-between items-start mb-2 border-b border-black pb-1">
          <p className="text-black text-[9px] font-black tracking-widest uppercase">
            {article.source.name}
          </p>
          <p className="text-gray-600 text-[9px] font-bold uppercase">{formatDate(article.publishedAt)}</p>
        </div>

        <h3 className="font-black text-2xl leading-none mb-3 ink-effect group-hover:underline decoration-1 underline-offset-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          {article.title}
        </h3>

        <p className="text-gray-800 text-sm leading-snug line-clamp-4 font-serif italic">
          {article.description}
        </p>
      </div>

      <div className="mt-6 flex items-center text-[10px] font-black uppercase tracking-widest text-black group-hover:translate-x-2 transition-transform">
        Continuar leyendo <span className="ml-2">⇾</span>
      </div>
    </div>
  )
}

export default NewsCard