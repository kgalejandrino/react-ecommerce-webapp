import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const fetchData = useCallback(async (transformData) => {
    try {
      const response = await fetch(
        "https://react-ecommerce-pcbuilds-default-rtdb.firebaseio.com/prebuilt.json"
      );

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
