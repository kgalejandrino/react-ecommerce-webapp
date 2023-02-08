import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const fetchData = useCallback(async (requestConfig, transformData) => {
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      transformData(data);
    } catch (error) {
      setHttpError(error.message);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    httpError,
    fetchData,
  };
};

export default useHttp;