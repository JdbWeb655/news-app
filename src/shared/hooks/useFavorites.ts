import { useState, useEffect } from "react";
import type { Article } from "../../features/news/news";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Article[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("news_favorites");
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading favorites", e);
      }
    }
  }, []);

  const toggleFavorite = (article: Article) => {
    const isFavorite = favorites.some((f) => f.url === article.url);
    let newFavorites: Article[];
    
    if (isFavorite) {
      newFavorites = favorites.filter((f) => f.url !== article.url);
    } else {
      newFavorites = [...favorites, article];
    }
    
    setFavorites(newFavorites);
    localStorage.setItem("news_favorites", JSON.stringify(newFavorites));
  };

  const isFavorite = (url: string) => favorites.some((f) => f.url === url);

  return { favorites, toggleFavorite, isFavorite };
};
