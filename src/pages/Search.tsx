import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useSearchNews } from "../features/news/useNews" 
import NewsGrid from "../features/news/NewGrid"
import Pagination from "../features/news/Pagination"
import { useDebounce } from "../shared/hooks/useDebounce"
import NoResults from "../shared/components/NoResults"
import SkeletonGrid from "../shared/components/SkeletonGrid"

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [page, setPage] = useState<number>(1)
  
  const queryParam = searchParams.get("q") ?? ""
  const [inputValue, setInputValue] = useState(queryParam)
  const debouncedQuery = useDebounce(inputValue, 500)

  useEffect(() => {
    if (debouncedQuery !== queryParam) {
      setSearchParams(debouncedQuery ? { q: debouncedQuery } : {})
      setPage(1)
    }
  }, [debouncedQuery, setSearchParams, queryParam])

  useEffect(() => {
    document.title = debouncedQuery 
      ? `Archivo: "${debouncedQuery}" | The News Times`
      : "Buscador | The News Times"
  }, [debouncedQuery])

  const { data, isLoading, error } = useSearchNews(debouncedQuery, page)
  const totalPages = data ? Math.ceil(data.totalResults / 12) : 0

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto animate-vintage">
      <div className="border-y-4 border-black mb-16 py-12 text-center bg-black/5">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 ink-effect" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          ARCHIVOS DEL MUNDO
        </h2>
        <div className="max-w-2xl mx-auto relative group px-4">
          <input
            type="text"
            placeholder="Ingrese palabras clave para la investigación..."
            value={inputValue}
            onChange={handleInputChange}
            className="w-full text-3xl px-0 py-6 border-b-4 border-black bg-transparent outline-none focus:bg-white/30 transition-all font-serif placeholder-black/20 text-center uppercase font-black"
          />
          <div className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
            {isLoading ? "Consultando archivos históricos..." : "Escriba para iniciar la búsqueda"}
          </div>
        </div>
      </div>

      {isLoading && <SkeletonGrid />}
      
      {error && (
        <div className="border-4 border-black p-8 my-12 bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          <p className="text-black font-black uppercase tracking-widest text-center">
            ⚠ ERROR DE CONEXIÓN CON EL CENTRO DE DATOS ⚠
          </p>
        </div>
      )}

      {data && data.articles.length > 0 ? (
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <span className="text-xs font-black uppercase tracking-widest whitespace-nowrap">Resultados de la Investigación:</span>
            <div className="h-[1px] flex-grow bg-black/20"></div>
            <span className="font-serif italic text-sm">{data.totalResults} documentos hallados</span>
          </div>
          <NewsGrid articles={data.articles} />
          <div className="border-t-2 border-black pt-12">
            <Pagination page={page} totalPages={totalPages} setPage={setPage} />
          </div>
        </div>
      ) : (
        !isLoading && debouncedQuery && <NoResults query={debouncedQuery} />
      )}
      
      {!debouncedQuery && !isLoading && (
        <div className="py-32 text-center opacity-20">
          <p className="text-4xl italic font-serif grayscale">El conocimiento es poder.</p>
        </div>
      )}
    </div>
  )
}

export default Search