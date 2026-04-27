import { useQuery } from "@tanstack/react-query"
import type { NewsResponse, Category } from "../types/news"

const BASE_URL = "https://news-backend-production-1eff.up.railway.app"

const fetchTopHeadlines = async (category: Category): Promise<NewsResponse> => {
  const response = await fetch( `${BASE_URL}/headlines?category=${category}` )
  if (!response.ok) throw new Error("Error al obtener noticias")
  return response.json()
}

const fetchSearchNews = async (query: string, page: number): Promise<NewsResponse> => {
  const response = await fetch( `${BASE_URL}/search?q=${query}&page=${page}` )
  if (!response.ok) throw new Error("Error al buscar noticias")
  return response.json()
}

export const useTopHeadlines = (category: Category) => {
  return useQuery({
    queryKey: ["headlines", category],
    queryFn: () => fetchTopHeadlines(category),
  })
}

export const useSearchNews = (query: string, page: number) => {
  return useQuery({
    queryKey: ["search", query, page],
    queryFn: () => fetchSearchNews(query, page),
    enabled: query.trim() !== "",
  })
}