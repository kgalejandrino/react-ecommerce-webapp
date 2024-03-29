import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  const fetchData = useCallback(async (requestConfig, transformData = null) => {
    setIsLoading(true);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      if (transformData) transformData(data);
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
