import {useContext, useEffect} from 'react';
import {CountriesContext} from '../context/countriesContext';

const CountriesSearch = () => {
  const {filter, setFilter, countries, setCountries} =
    useContext(CountriesContext);

  return <div>Countries list</div>;
};

export default CountriesSearch;
