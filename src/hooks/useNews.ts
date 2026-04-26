import { useQuery } from "@tanstack/react-query"
import type { NewsResponse, Category } from "../types/news"

const API_KEY = import.meta.env.VITE_NEWS_API_KEY as string
const BASE_URL = "https://newsapi.org/v2"

const fetchTopHeadlines = async (category: Category): Promise<NewsResponse> => {
  const response = await fetch(
    `${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
  )
  if (!response.ok) throw new Error("Error al obtener noticias")
  return response.json()
}

const fetchSearchNews = async (query: string, page: number): Promise<NewsResponse> => {
  const response = await fetch(
    `${BASE_URL}/everything?q=${query}&page=${page}&pageSize=12&sortBy=publishedAt&apiKey=${API_KEY}`
  )
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