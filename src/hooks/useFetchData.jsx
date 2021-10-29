import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setApiData(data);
        setLoading(false);
      } catch (error) {
        setServerError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { loading, apiData, serverError };
};

export default useFetchData;
