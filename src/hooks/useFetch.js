//useFetch.js
import {useState, useEffect, useContext} from 'react';
import axios from 'axios';

import {CountriesContext} from '../context/countriesContext';

function useFetch(url) {
  const {countries, setCountries} = useContext(CountriesContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(url, {cancelToken: source.token})
      .then((res) => {
        setLoading(false);
        res.data && setCountries(res.data);
        res.content && setCountries(res.content);
      })
      .catch((err) => {
        setLoading(false);
        setError('An error occurred. Awkward..');
      });
    return () => {
      source.cancel();
    };
  }, [url]);

  return {countries, loading, error};
}

export default useFetch;
