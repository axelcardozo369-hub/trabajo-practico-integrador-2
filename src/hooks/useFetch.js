import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const respuesta = await fetch(url, { credentials: "include" });
      const resultado = await respuesta.json();
      setData(resultado);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return {
    data,
    isLoading,
    error,
  };
};
