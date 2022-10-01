import { useState, useEffect } from 'react';
import axios from 'axios';

// axios.defaults.baseURL = 'https://api.edamam.com/search?app_key=21b0439f73d40762540d12bb2dcccc9d&app_id=87dc6b39';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

/**
 fixed :
  - no need to JSON.stringify to then immediatly do a JSON.parse
  - don't use export defaults, because default imports are hard to search for
  - axios already support generic request in one parameter, no need to call specialized ones
**/
export const useRecipeCall = (axiosParams) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async (params) => {
      try {
       const result = await axios.request(params);
       console.log(result);
       setResponse(result.data);
       } catch( error ) {
         setError(error);
       } finally {
         setIsLoading(false);
       }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, [axiosParams]); // execute once only

    return { response, error, isLoading };
};