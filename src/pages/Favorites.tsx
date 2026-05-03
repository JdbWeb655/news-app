import { useFavorites } from "../shared/hooks/useFavorites";
import NewGrid from "../features/news/NewGrid";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Mis Favoritos | News App";
  }, []);

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      <div className="border-b-4 border-black mb-12 pb-6 flex justify-between items-end">
        <h2 className="text-5xl font-black tracking-tighter uppercase" style={{ fontFamily: "Georgia, serif" }}>
          Mis Favoritos
        </h2>
        <p className="text-gray-500 font-serif italic">
          {favorites.length} {favorites.length === 1 ? "artículo guardado" : "artículos guardados"}
        </p>
      </div>

      {favorites.length > 0 ? (
        <NewGrid articles={favorites} />
      ) : (
        <div className="py-20 text-center">
          <div className="text-6xl mb-6">🔖</div>
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Aún no tienes noticias guardadas
          </h3>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Explora las últimas noticias y haz clic en el corazón para guardarlas aquí y leerlas más tarde.
          </p>
          <button 
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform"
          >
            Explorar noticias
          </button>
        </div>
      )}
    </div>
  );
};

export default Favorites;
