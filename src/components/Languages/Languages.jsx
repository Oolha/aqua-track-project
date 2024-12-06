import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './Languages.module.css';


import enFlag from '../../assets/icons/en.svg';
import ukFlag from '../../assets/icons/uk.svg';

const Languages = () => {
  const { i18n } = useTranslation();  

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);  
  };

  return (
    <header className={style.languages}>
      <button
        className={style.languageBtn}
        onClick={() => changeLanguage('en')}  
      >
        <img src={enFlag} alt="English" className={style.iconFlag} />
      </button>
      <span className={style.line}>|</span>
      <button
        className={style.languageBtn}
        onClick={() => changeLanguage('uk')}  
      >
        <img src={ukFlag} alt="Ukrainian" className={style.iconFlag} />
      </button>
    </header>
  );
};

export default Languages;