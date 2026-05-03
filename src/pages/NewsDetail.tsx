import { useSearchParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const NewsDetail = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const url = searchParams.get("url")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = "Leyendo noticia | News App"
  }, [])

  if (!url) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Noticia no encontrada</h2>
        <button onClick={() => navigate("/")} className="px-6 py-2 bg-black text-white rounded-full">
          Ir al inicio
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f0e8]">
      <div className="w-full bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-xs font-black tracking-widest uppercase border-2 border-black px-4 py-1.5 hover:bg-black hover:text-white transition-all duration-200"
            style={{ fontFamily: "Georgia, serif" }}
          >
            ← Volver
          </button>
          
          <div className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-gray-400 truncate max-w-md">
            {url}
          </div>

          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-bold underline underline-offset-4 hover:text-red-700 transition-colors"
          >
            Abrir en pestaña nueva ↗
          </a>
        </div>
      </div>
      
      <div className="flex-grow relative">
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f5f0e8] z-0">
            <div className="animate-spin h-10 w-10 border-4 border-black border-t-transparent rounded-full mb-4"></div>
            <p className="font-serif italic text-gray-500">Cargando fuente original...</p>
          </div>
        )}
        <iframe
          src={url}
          title="Noticia Original"
          className="w-full h-full border-none relative z-1"
          style={{ height: "calc(100vh - 64px)" }}
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  )
}

export default NewsDetail