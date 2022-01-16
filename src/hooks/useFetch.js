import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => 
        // if (!response.ok) {
        //   throw new Error("Sorry, something went wrong! Please try again.");
        // }
        response.json()
      )
      .then(res => {
        console.log(res, "test")
        if(res.MRData) {
        setData(res.MRData);
        setIsLoading(false);
        console.log("state", data);
        }
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      })
  }, [isLoading])

  return {data, isLoading, error};
}

export default useFetch;