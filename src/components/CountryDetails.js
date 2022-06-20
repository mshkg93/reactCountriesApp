import {useEffect} from 'react';
import {useState, useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {CountriesContext} from '../context/countriesContext';

const CountryDetails = () => {
  const [languages, setLanguages] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const {countries, country, loading} = useContext(CountriesContext);
  const navigate = useNavigate();
  const {countryName} = useParams();
  const data = country[0];
  // const languages = Object.values(data?.languages);
  useEffect(() => {
    for (const [_, value] of Object.entries(data?.languages)) {
      setLanguages((languages) =>
        Array.from(new Set([...languages, value]))
      );
    }

    const currenciesxD = [...Object.entries(data?.currencies)];

    const xDD = currenciesxD
      .map(([key, value]) => {
        return {...value, code: key};
      })
      .map((value) => {
        return value.name;
      })
      .join(', ');
    setCurrencies(xDD);
  }, []);
  const languagesSentence =
    languages.length > 1
      ? [languages].join(`, ${String.fromCharCode(160)}`)
      : [...languages];
  const currenciesSentence =
    currencies.length > 1
      ? [currencies].join(`, ${String.fromCharCode(160)}`)
      : [...currencies];

  const borders = data?.borders.map((border) => {
    // const borderz = countries.filter((coun) =>
    //   coun?.altSpellings.includes(border)
    // );
    for (let [key, v] of Object.entries(countries)) {
      if (key === border) {
        return v.name;
      }
    }
    // console.log(borderz);
    return (
      <div className='flex flex-col items-center justify-center'>
        <img
          src={data?.flags.png}
          alt={`${data?.name?.common} Flag`}
          className='max-w-[200px] object-cover rounded-sm'
        />
        <h3 className='font-extrabold'>{border}</h3>
      </div>
    );
  });

  return (
    <main className=' flex flex-col h-[100vh] w-[90%] mx-auto my-12 items-start'>
      <button
        className='flex space-x-3 p-3 shadow-md w-40 justify-center items-center rounded-md bg-veryLightGray transition-all dark:bg-darkBlue hover:shadow-xl hover:scale-x-105'
        onClick={() => navigate(-1)}>
        <span>⬅️</span>
        <span>Back</span>
      </button>
      <div className='flex flex-col md:flex-row w-full mt-8 gap-20'>
        <img
          src={data?.flags?.svg}
          alt={`${data?.name?.common} Flag`}
          className=' max-w-[400px] max-h[250px] object-cover rounded-sm'
        />
        <section className=' text-start p-7 rounded-sm dark:bg-darkBlue md:w-[60%] md:mx-auto '>
          <h2 className='font-extrabold text-2xl col-1 mb-5'>
            {data?.name?.common}
          </h2>
          <div className='grid gap-3 grid-cols-1 md:grid-rows-5 md:grid-cols-2 '>
            <div className='col-1 flex space-x-2'>
              <h3 className='font-extrabold'>Native Name: </h3>
              <p>{data?.name.official}</p>
            </div>
            <div className=' col-1 flex space-x-1'>
              <h3 className='font-extrabold'>Population: </h3>
              <span>{data?.population.toLocaleString()}</span>
            </div>
            <div className='col-1 flex space-x-1'>
              <h3 className='font-extrabold'>Region: </h3>
              <span>{data?.region}</span>
            </div>
            <div className='flex space-x-1'>
              <h3 className='font-extrabold'>Sub-Region: </h3>
              <span>{data?.subregion}</span>
            </div>
            <div className='flex space-x-1'>
              <h3 className='font-extrabold'>Capital: </h3>
              <span>{data?.capital}</span>
            </div>
            <div className='flex space-x-1'>
              <h3 className='font-extrabold'>Top Level Domain: </h3>
              <span>{data?.tld[0]}</span>
            </div>
            <div className='flex space-x-1'>
              <h3 className='font-extrabold'>Currencies: </h3>
              <span>{currenciesSentence}</span>
            </div>
            <div className='flex space-x-1'>
              <h3 className='font-extrabold'>Languages: </h3>
              <span>{languagesSentence}</span>
            </div>
          </div>

          <div>
            <h3 className='font-extrabold'>Border Countries: </h3>
            <div className='flex flex-col gap-3'>{borders}</div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default CountryDetails;
