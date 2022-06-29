import CountryCard from './CountryCard';
const CountriesGrid = ({countries, filter}) => {
  return (
    <div className='grid gap-10  mx-auto w-full mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {countries?.map((country) => {
        const id = Math.random() * 99999999999999;

        return <CountryCard key={id} country={country} />;
      })}
    </div>
  );
};

export default CountriesGrid;
