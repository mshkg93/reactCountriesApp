import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';

import {CountriesContext} from '../context/countriesContext';

const CountryCard = ({country}) => {
  const {setLoading, setError, setCountry} =
    useContext(CountriesContext);
  let navigate = useNavigate();

  const populationInt = country?.population?.toLocaleString() || 0;
  const code = country?.ccn3;

  const fetchCountryHandler = () => {
    setLoading(true);
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
        setLoading(false);
        navigate(`/country/${data[0]?.name.common.toLowerCase()}`);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  return (
    <div
      className='border-solid border-x-1 rounded-lg transition-all overflow-hidden h-[400px] shadow-sm hover:scale-110 hover:shadow-md bg-whiteEl dark:bg-darkBlue hover:cursor-pointer'
      onClick={fetchCountryHandler}>
      <div className='flex w-full overflow-hidden h-[200px] items-center '>
        <img
          src={country?.flags?.png}
          alt=''
          className='w-full max-h-[200px] object-cover rounded-sm'
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      <div className='flex flex-col h-[200px] rounded-sm p-4 gap-1'>
        <div className='flex my-2 text-start'>
          <h3 className='font-extrabold text-lg'>
            {country?.name.official}
          </h3>
        </div>
        <div className='flex space-x-1'>
          <h3 className='font-semibold'>Population: </h3>
          <p>{populationInt}</p>
        </div>
        <div className='flex space-x-1'>
          <h3 className='font-semibold'>Region: </h3>
          <p>{country?.region}</p>
        </div>

        <div className='flex space-x-1'>
          <h3 className='font-semibold'>Capital: </h3>
          <p>{country?.capital}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
