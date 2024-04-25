// custom hook to fetch data...

import { useState, useEffect } from "react";

import { getRequest } from "../services";

const useFetch = (endpoint) => {
  const [apiData, setApiData] = useState({
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setApiData({ ...apiData, loading: true });
      try {
        const response = await getRequest(endpoint);
        const { results } = await response.json();
        setApiData((prevData) => ({
          ...prevData,
          loading: false,
          data: results,
        }));
      } catch (err) {
        setApiData({ ...apiData, loading: false, error: err });
      }
    };

    fetchData();
  }, [endpoint]);
  return apiData;
};

export default useFetch;
