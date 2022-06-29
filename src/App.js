import {useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import {CountriesProvider} from './context/countriesContext';
import TopBar from './components/TopBar';
import './App.css';

import MainContent from './components/MainContent';
import CountryDetails from './components/CountryDetails';

function App() {
  useEffect(() => {
    localStorage.getItem('theme');
  }, []);

  return (
    <CountriesProvider>
      <div className='App min-h-screen w-full transition-all bg-veryLightGray text-black dark:bg-veryDarkBlue dark:text-white'>
        <TopBar />
        <Routes>
          <Route path='/' element={<MainContent />} />
          <Route path='/country'>
            <Route path=':countryName' element={<CountryDetails />} />
          </Route>

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </CountriesProvider>
  );
}

export default App;
