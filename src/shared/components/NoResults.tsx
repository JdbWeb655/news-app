const NoResults = ({ query }: { query: string }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="text-6xl mb-4">🔍</div>
      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "Georgia, serif" }}>
        No encontramos nada para "{query}"
      </h3>
      <p className="text-gray-500 max-w-md">
        Intenta buscar con otras palabras clave o revisa si hay algún error de ortografía.
      </p>
    </div>
  );
};

export default NoResults;
