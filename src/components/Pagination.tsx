interface PaginationProps {
  page: number
  totalPages: number
  setPage: (value: number | ((prev: number) => number)) => void
}

const Pagination = ({ page, totalPages, setPage }: PaginationProps) => {
  if (totalPages === 0) return null

  const handlePrevPage = () => setPage(prev => prev - 1)
  const handleNextPage = () => setPage(prev => prev + 1)

  return (
    <div className="flex justify-center items-center gap-6 mt-12 border-t border-gray-400 pt-6">
      <button
        onClick={handlePrevPage}
        disabled={page === 1}
        className="px-4 py-1 border border-gray-900 text-sm tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        ← Anterior
      </button>
      <span className="text-sm italic text-gray-500">
        Página {page} de {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={page === totalPages}
        className="px-4 py-1 border border-gray-900 text-sm tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Siguiente →
      </button>
    </div>
  )
}

export default Pagination