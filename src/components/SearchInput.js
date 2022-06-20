import {useState, useRef, useId, useContext} from 'react';
// import {useNavigate} from 'react-router';

import {CountriesContext} from '../context/countriesContext';

const SearchInput = () => {
  const {
    filter,
    setFilter,
    countries,
    setFilteredCountries,
    setCountry,
    setLoading,
    setError,
  } = useContext(CountriesContext);

  // const navigate = useNavigate();

  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const regionId = useId();
  const countryId = useId();

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const filterChangeHandler = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
    setFilteredCountries(
      countries.filter((country) =>
        country?.region
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      )
    );
  };
  // console.log(filteredCountries);
  const fetchCountryHandler = () => {
    setLoading(true);
    fetch(
      // `https://restcountries.com/v3.1/name/${country?.name.common}`
      `https://restcountries.com/v3.1/name/${input}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
        setLoading(false);
        console.log(data);
        // navigate('/:country');
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  return (
    <div className='container flex flex-col w-full mx-auto my-4 sm:flex-row md:items-between'>
      <form
        className='flex flex-col w-full my-4 sm:flex-row sm:items-center  sm:justify-between overflow-hidden'
        onSubmit={fetchCountryHandler}>
        <label
          htmlFor={countryId}
          className=' flex h-20  items-center'>
          <input
            ref={inputRef}
            className='flex p-3 mx-1 basis-11/12 rounded-lg bg-veryLightGray dark:bg-darkBlue dark:text-white md:w-[400px] focus:outline-none shadow-md '
            type='text'
            value={input}
            placeholder=' 🔍 Search for a country...'
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor={regionId} className=' items-center'>
          <select
            name='regionFilter'
            id={regionId}
            className='w-60 shadow-md  p-5 mx-1 rounded-lg md:w-48 md:p-4 focus:outline-none text-black bg-veryLightGray dark:bg-darkBlue dark:text-white'
            value={filter}
            onChange={filterChangeHandler}>
            <option value=''>Filter by region</option>
            <option value='africa'>Africa</option>
            <option value='america'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
          </select>
        </label>
      </form>
    </div>
  );
};
export default SearchInput;
