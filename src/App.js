import {useContext, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

import {DarkModeContext} from './context/darkModeContext';
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
          <Route path='*' element={<MainContent />} />
          <Route path=':country' element={<CountryDetails />} />
        </Routes>
      </div>
    </CountriesProvider>
  );
}

export default App;
