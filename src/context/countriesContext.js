import React, {useState, useEffect, createContext} from 'react';
import useFetch from '../hooks/useFetch';

export const CountriesContext = createContext({});
export const CountriesProvider = ({children}) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [country, setCountry] = useState('');
  const {data, error: fetchedError} = useFetch(
    'https://restcountries.com/v3.1/all'
  );

  useEffect(() => {
    if (data !== []) {
      setCountries(data);
      setFilteredCountries(data);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (fetchedError) {
      setError(fetchedError);
      setLoading(false);
    }
  }, [fetchedError]);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        country,
        filteredCountries,
        loading,
        error,
        filter,
        setFilteredCountries,
        setCountry,
        setCountries,
        setLoading,
        setError,
        setFilter,
      }}>
      {children}
    </CountriesContext.Provider>
  );
};
