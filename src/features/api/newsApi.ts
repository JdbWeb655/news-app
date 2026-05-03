import type { NewsResponse, Category } from "../news/news";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchTopHeadlines = async (category: Category): Promise<NewsResponse> => {
  const response = await fetch(`${BASE_URL}/headlines?category=${category}`)
  if(!response.ok) throw new Error("Error al obtener noticias")
    return response.json()
}

export const fetchSearchNews = async (query: string, page: number): Promise<NewsResponse> => {
  const response = await fetch(`${BASE_URL}/search?q=${query}&page=${page}`)
  if(!response.ok) throw new Error("Error al buscar noticias")
    return response.json()
}

