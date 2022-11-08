import { useState, useEffect } from "react";

export const useFetch = function (url) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);

        const data = await res.json();

        setData(data);
      } catch (error) {
        setError("An error occurred. Try again later.");
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};
