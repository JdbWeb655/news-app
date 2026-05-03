import { useQuery } from "@tanstack/react-query"
import type { Category } from "./news"
import { fetchTopHeadlines, fetchSearchNews } from "../api/newsApi"

export const useTopHeadlines = (category: Category) => {
  return useQuery({
    queryKey: ["headlines", category],
    queryFn: () => fetchTopHeadlines(category),
    select: (data) => data.articles,
    staleTime: 1000 * 60 * 5,
    retry: 2
  })
}

export const useSearchNews = (query: string, page: number) => {
  return useQuery({
    queryKey: ["search", query, page],
    queryFn: () => fetchSearchNews(query, page),
    enabled: query.trim() !== "",
  })
}