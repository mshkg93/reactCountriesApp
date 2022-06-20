import {Link} from 'react-router-dom';
import ThemeBtn from './ThemeBtn';

const TopBar = () => {
  // const {isDark, light, dark} = useContext(DarkModeContext);
  return (
    <div className='flex w-full items-center justify-between shadow-lg p-6  lg:justify-between lg:px-10 dark:bg-darkBlue'>
      <Link to='/'>
        <span className='font-fontNunito font-extrabold text-2xl'>
          Where in the world?
        </span>
      </Link>
      <ThemeBtn />
    </div>
  );
};

export default TopBar;
