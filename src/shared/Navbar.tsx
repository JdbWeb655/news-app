import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="px-6 py-8 md:py-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header Superior con Fecha y Detalles */}
        <div className="flex justify-between items-center border-b-2 border-black pb-2 mb-1 text-[10px] font-black uppercase tracking-[0.2em]">
          <span>Vol. LXXIV ... No. 25,483</span>
          <span className="hidden md:inline">
            Córdoba, Argentina, {new Date().toLocaleDateString("es-AR", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric"
            }).replace(/^\w/, (c) => c.toUpperCase())}
          </span>
          <span>Precio: 0.25¢</span>
        </div>

        {/* Masthead (Título principal) */}
        <div className="text-center py-6 border-b-8 border-double border-black mb-4">
          <Link to="/" className="inline-block group">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter ink-effect group-hover:scale-[1.01] transition-transform" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              THE NEWS TIMES
            </h1>
          </Link>
          <div className="flex justify-center items-center gap-6 mt-4">
            <div className="h-[2px] flex-grow bg-black"></div>
            <p className="text-xs md:text-sm text-gray-800 tracking-[0.4em] uppercase font-black italic">
              "All the News That's Fit to Print"
            </p>
            <div className="h-[2px] flex-grow bg-black"></div>
          </div>
        </div>

        {/* Navegación Estilo Retro */}
        <div className="flex justify-center flex-wrap gap-4 md:gap-12 text-[11px] font-black tracking-[0.25em] uppercase">
          <Link 
            to="/" 
            className={`transition-all duration-300 pb-1 border-b-2 ${
              isActive("/") ? "border-black scale-110" : "border-transparent hover:border-black"
            }`}
          >
            Noticias
          </Link>
          <Link 
            to="/search" 
            className={`transition-all duration-300 pb-1 border-b-2 ${
              isActive("/search") ? "border-black scale-110" : "border-transparent hover:border-black"
            }`}
          >
            Buscador
          </Link>
          <Link 
            to="/favorites" 
            className={`transition-all duration-300 pb-1 border-b-2 ${
              isActive("/favorites") ? "border-black scale-110" : "border-transparent hover:border-black"
            }`}
          >
            Mis Archivos
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar