import { API_URL } from "../config/api";
import { useFetch } from "../hook/useFetch";

export const HomePage = () => {
  const { data, isLoading, error } = useFetch(`${API_URL}/articles`);

  console.log(data, isLoading, error);
  return (
    <>
      <div>
        <h1>HomePage</h1>
        {isLoading && <p>Cargando backend..</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!isLoading && !error && data?.articles?.length === 0 && (
          <p>No hay articulos publicados </p>
        )}
        {data?.articles?.map((article) => (
          <article key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <p>Usuario: {article.user.username}</p>
          </article>
        ))}
      </div>
    </>
  );
};
