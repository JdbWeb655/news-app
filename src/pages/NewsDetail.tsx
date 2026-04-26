import { useSearchParams, useNavigate } from "react-router-dom"

const NewsDetail = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const url = searchParams.get("url")

  if (!url) return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <p className="text-gray-500 italic">Noticia no encontrada</p>
    </div>
  )

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f0e8" }}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm tracking-widest uppercase border border-gray-900 px-4 py-1 hover:bg-gray-900 hover:text-white transition-colors mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          ← Volver
        </button>
      </div>
      <iframe
        src={url}
        title="Noticia"
        className="w-full border-t border-gray-300"
        style={{ height: "calc(100vh - 80px)" }}
      />
    </div>
  )
}

export default NewsDetail