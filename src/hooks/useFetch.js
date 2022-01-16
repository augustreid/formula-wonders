import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Sorry, something went wrong! Please try again.");
        }
        return response.json()}
      )
      .then(data => {
        console.log(data, "test")
        setData(data.MRData);
        setIsLoading(false);
        console.log("state", data);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      })
  }, [url, isLoading])

  return {data, isLoading, error};
}

export default useFetch;