import {useState, useEffect, useContext} from 'react';
import useFetch from '../hooks/useFetch';
import {CountriesContext} from '../context/countriesContext';
import LoadingIndicator from './LoadingIndicator';
import CountriesGrid from './CountriesGrid';

const Countries = () => {
  const {
    countries,
    loading,
    error: fetchedError,
  } = useFetch('https://restcountries.com/v3.1/all');
  const {filter, setFilter, filteredCountries} =
    useContext(CountriesContext);

  console.log(filter);
  return (
    <div className='flex items-center justify-center'>
      {(loading && <LoadingIndicator />) ||
        (filter !== '' && (
          <CountriesGrid countries={filteredCountries} />
        )) ||
        (countries && <CountriesGrid countries={countries} />)}
    </div>
  );
};

export default Countries;
