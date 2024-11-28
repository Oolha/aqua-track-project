import css from './Loader.module.css';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={css.loader}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#87d28d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
