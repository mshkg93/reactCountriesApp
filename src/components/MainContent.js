import SearchInput from './SearchInput';
import Countries from './Countries';

// import
const MainContent = () => {
  return (
    <main className=' flex flex-col mx-auto w-[90%]'>
      <SearchInput />
      <Countries />
    </main>
  );
};
export default MainContent;
