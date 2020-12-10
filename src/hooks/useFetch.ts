import { useState, useEffect } from 'react';

const useFetch = (initialUrl: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, updateUrl] = useState(initialUrl);
  const setResponse = (loadingState: boolean = false, data: any = null) => {
    setData(data);
    setLoading(loadingState);
  };
  useEffect(() => {
    async function fetchData() {
      if (url === '') {
        return;
      }
      setResponse(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setResponse(false, json);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [url]);
  return { loading, data, updateUrl };
};

export default useFetch;
