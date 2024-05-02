// custom hook to fetch data...

import { useState, useEffect } from "react";

import { getRequest } from "../services";

const useFetch = (endpoint) => {
  const [apiData, setApiData] = useState({
    loading: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setApiData({ ...apiData, loading: true });
      try {
        const response = await getRequest(endpoint);
        const data = await response.json();
        setApiData((prevData) => ({
          ...prevData,
          loading: false,
          data: data,
        }));
      } catch (err) {
        setApiData({ ...apiData, loading: false, error: err });
      }
    };

    fetchData();
  }, [endpoint]);

  //this function will trigger fetch again...
  const refetch = async () => {
    try {
      const response = await getRequest(endpoint);
      const data = await response.json();
      setApiData({ loading: false, data: data, error: null });
    } catch (err) {
      setApiData({ loading: false, data: [], error: err });
    }
  };
  return { ...apiData, refetch };
};

export default useFetch;
