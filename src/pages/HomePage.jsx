import { useFetch } from "../hook/useFetch";

export const HomePage = () => {
  const { data, isLoading, error } = useFetch(
    "http://localhost:3000/api/articles",
  );
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
      </div>
    </>
  );
};
