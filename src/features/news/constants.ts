import type { Category } from "./news";

export const CATEGORIES: Category[] = [
  "general",
  "technology",
  "sports",
  "science",
  "health",
  "entertainment",
  "business",
];

export const CATEGORY_LABELS: Record<Category, string> = {
  general: "General",
  business: "Negocios",
  entertainment: "Entretenimiento",
  health: "Salud",
  science: "Ciencia",
  sports: "Deportes",
  technology: "Tecnología",
};
