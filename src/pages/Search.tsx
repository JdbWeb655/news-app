import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useSearchNews } from "../hooks/useNews"
import NewsGrid from "../components/NewGrid"
import Pagination from "../components/Pagination"

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [page, setPage] = useState<number>(1)

  const query = searchParams.get("q") ?? ""

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ q: e.target.value })
    setPage(1)
  }

  const { data, isLoading, error } = useSearchNews(query, page)
  const totalPages = data ? Math.ceil(data.totalResults / 12) : 0

  return (
    <div className="min-h-screen p-6 max-w-6xl mx-auto">
      <div className="border-b-2 border-gray-900 mb-8 pb-4">
        <h2 className="text-3xl font-black tracking-tight mb-4" style={{ fontFamily: "Georgia, serif" }}>
          Buscar Noticias
        </h2>
        <input
          type="text"
          placeholder="Buscar noticias..."
          value={query}
          onChange={handleQueryChange}
          className="w-full max-w-lg px-4 py-2 border-2 border-gray-900 bg-transparent outline-none placeholder-gray-400 font-serif"
        />
      </div>

      {isLoading && <p className="text-center text-gray-500 italic">Buscando...</p>}
      {error && <p className="text-center text-red-700">Error al buscar noticias</p>}
      {data && <NewsGrid articles={data.articles} />}
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  )
}

export default Search