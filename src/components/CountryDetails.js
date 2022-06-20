import {useEffect} from 'react';
import {useState, useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {CountriesContext} from '../context/countriesContext';
import LoadingIndicator from './LoadingIndicator';

const CountryDetails = () => {
  const [languages, setLanguages] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [borderz, setBorderz] = useState([]);
  const {countries, country, loading} = useContext(CountriesContext);
  const navigate = useNavigate();
  const {countryName} = useParams();
  const data = country[0];
  console.log(countryName);

  useEffect(() => {
    for (const [_, value] of Object.entries(data?.languages)) {
      setLanguages((languages) =>
        Array.from(new Set([...languages, value]))
      );
    }

    const currenciesFromData = [...Object.entries(data?.currencies)];

    const cur = currenciesFromData
      .map(([_, value]) => {
        return {...value};
      })
      .map((value) => {
        return value.name;
      })
      .join(', ');

    setCurrencies(cur);
  }, []);

  const languagesSentence =
    languages.length > 1
      ? [languages].join(`, ${String.fromCharCode(160)}`)
      : [...languages];

  const currenciesSentence =
    currencies.length > 1
      ? [currencies].join(`, ${String.fromCharCode(160)}`)
      : [...currencies];

  useEffect(() => {
    const borders = data?.borders?.map((border) => {
      const countryyy = data?.borders.map((border) => {
        return countries.find((count) => count.cca3 === border);
      });
      return Array.from(new Set(countryyy));
    });

    setBorderz(borders);
  }, []);

  const borderCountries = borderz
    ? borderz[0]?.map((ctr) => (
        <div className='flex flex-col justify-start items-center p-2 h-[200px] '>
          <img
            src={ctr?.flags?.png}
            alt={`${ctr?.name?.common} Flag`}
            className='w-[160px] h-[110px] object-cover rounded-sm'
          />
          <h3 className='font-extrabold flex flex-wrap max-w-[160px] items-center text-center'>
            {ctr?.name?.common}
          </h3>
        </div>
      ))
    : null;

  return (
    <main className=' flex flex-col h-full w-[90%] mx-auto my-12 items-start'>
      <button
        className='flex space-x-3 p-3 shadow-md w-40 justify-center items-center rounded-md bg-veryLightGray transition-all dark:bg-darkBlue hover:shadow-xl hover:scale-x-105'
        onClick={() => navigate(-1)}>
        <span>⬅️</span>
        <span>Back</span>
      </button>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <div className='flex flex-col md:flex-row w-full mt-8 gap-20'>
          <img
            src={data?.flags?.svg}
            alt={`${data?.name?.common} Flag`}
            className=' max-w-[400px] max-h[250px] object-contain self-start rounded-sm'
          />
          <section className=' text-start p-7 rounded-sm  dark:bg-darkBlue md:w-[60%] md:mx-auto '>
            <h2 className='font-extrabold text-2xl col-1 mb-5'>
              {data?.name?.common}
            </h2>
            <div className='grid gap-3 grid-cols-1 lg:grid-cols-2 '>
              <div className='col-1 flex space-x-2 flex-col lg:flex-row'>
                <h3 className='font-extrabold'>Native Name: </h3>
                <p>{data?.name.official}</p>
              </div>
              <div className=' col-1 flex space-x-1 flex-col lg:flex-row'>
                <h3 className='font-extrabold'>Population: </h3>
                <span>{data?.population.toLocaleString()}</span>
              </div>
              <div className='col-1 flex space-x-1 flex-col lg:flex-row'>
                <h3 className='font-extrabold'>Region: </h3>
                <span>{data?.region}</span>
              </div>
              <div className='flex space-x-1 flex-col lg:flex-row'>
                <h3 className='font-extrabold'>Sub-Region: </h3>
                <span>{data?.subregion}</span>
              </div>
              <div className='flex space-x-1 flex-col lg:flex-row'>
                <h3 className='font-extrabold'>Capital: </h3>
                <span>{data?.capital}</span>
              </div>
              <div className='flex space-x-1 flex-col lg:flex-row'>
                <h3 className='font-extrabold'>Top Level Domain: </h3>
                <span>{data?.tld[0]}</span>
              </div>
              <div className='flex space-x-1 flex-col lg:flex-row'>
                <h3 className='font-extrabold'>Currencies: </h3>
                <span>{currenciesSentence}</span>
              </div>
              <div className='flex space-x-1 flex-col xl:flex-row'>
                <h3 className='font-extrabold'>Languages: </h3>
                <span className='flex flex-wrap'>
                  {languagesSentence}
                </span>
              </div>
            </div>

            <div className='flex flex-col flex-wrap max-w-full items-start mt-5'>
              {borderz ? (
                <>
                  <h3 className='font-extrabold'>
                    Border Countries:{' '}
                  </h3>
                  <div className='flex flex-col flex-wrap md:flex-row'>
                    {borderCountries}
                  </div>
                </>
              ) : null}
            </div>
          </section>
        </div>
      )}
    </main>
  );
};
export default CountryDetails;
