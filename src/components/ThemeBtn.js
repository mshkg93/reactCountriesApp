import {useContext} from 'react';
import {DarkModeContext} from '../context/darkModeContext';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faMoon as LightIcon} from '@fortawesome/free-regular-svg-icons';
import {faMoon as DarkIcon} from '@fortawesome/free-solid-svg-icons';
const ThemeBtn = () => {
  const {isDark, toggleTheme, theme} = useContext(DarkModeContext);
  let icon;
  if (isDark) {
    icon = DarkIcon;
  } else {
    icon = LightIcon;
  }
  const toggleThemeHandler = () => {
    toggleTheme();
  };

  return (
    <>
      <button
        onClick={toggleThemeHandler}
        style={{
          border:
            theme === 'light' ? '1px solid #000' : '1px solid #fff',
        }}
        className='p-3 rounded-lg'>
        <FontAwesomeIcon icon={icon} />
        Toggle Theme
      </button>
      {/* </div> */}
    </>
  );
};

export default ThemeBtn;
