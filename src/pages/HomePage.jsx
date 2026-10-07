import { API_URL } from "../config/api";
import { useFetch } from "../hook/useFetch";

export const HomePage = () => {
  const { data, isLoading, error } = useFetch(`${API_URL}/articles`);

  return (
    <>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold">Tus articulos</h1>
        {isLoading && <p>Cargando backend..</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!isLoading && !error && data?.articles?.length === 0 && (
          <p>No hay articulos publicados </p>
        )}
        {data?.articles?.map((article) => (
          <article
            className="border border-slate-300 rounded-xl p-4 shadow-sm mt-4"
            key={article.id}
          >
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p className="text-slate-600">{article.excerpt}</p>
            <p className="text-sm text-slate-500 mt-2">
              Usuario: {article.user.username}
            </p>
          </article>
        ))}
      </div>
    </>
  );
};
