import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

const LoadingIndicator = () => {
  return (
    <div className='animate-spin w-16 h-16'>
      <FontAwesomeIcon icon={faSpinner} spin />
    </div>
  );
};

export default LoadingIndicator;
