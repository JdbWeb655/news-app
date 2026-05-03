import NewsCard from "./NewCard";
import type{ Article } from './news';

interface Props {
  articles: Article[];
};

const NewGrid = ({ articles }: Props) => {
  if( articles.length === 0 ) {
    return (
      <div className="text-center py-20 border-2 border-dashed border-black/20">
        <p className="text-gray-400 text-2xl font-serif italic">
          — Edición vacía —
        </p>
      </div>
    )
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <NewsCard key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewGrid