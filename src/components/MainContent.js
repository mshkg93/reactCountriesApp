import {useContext} from 'react';

import {CountriesContext} from '../context/countriesContext';

import SearchInput from './SearchInput';
import Countries from './Countries';
// import
const MainContent = () => {
  const {countries, setCountries, loading, setError} =
    useContext(CountriesContext);

  return (
    <main className=' flex flex-col mx-auto w-[90%]'>
      <SearchInput />
      <Countries />
    </main>
  );
};
export default MainContent;
