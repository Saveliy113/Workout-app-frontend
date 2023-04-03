import { useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import styles from './Hamburger.module.scss';

const Hamburger = () => {
  const [isShow, setIsShow] = useState(false);
  const logOutHandler = () => {};
  return (
    <div className={styles.wrapper}>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? <IoClose color="white" /> : <CgMenuRight color="white" />}
      </button>
    </div>
  );
};

export default Hamburger;
