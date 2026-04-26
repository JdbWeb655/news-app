import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="border-b-4 border-gray-900 px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center border-b border-gray-400 pb-3 mb-3">
          <h1 className="text-5xl font-black tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
            THE NEWS TIMES
          </h1>
          <p className="text-xs text-gray-500 mt-1 tracking-widest uppercase">
            Tu fuente de noticias del mundo
          </p>
        </div>
        <div className="flex justify-center gap-8 text-sm font-medium tracking-widest uppercase">
          <Link to="/" className="hover:text-red-700 transition-colors">Inicio</Link>
          <Link to="/search" className="hover:text-red-700 transition-colors">Buscar</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar