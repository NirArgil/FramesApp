import React, { useState, createContext, useContext } from 'react';

import { languageOptions, dictionaryList } from '../languages';

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: 'heb',
  dictionary: dictionaryList.heb
});

// it provides the language context to app
export function LanguageProvider({ children }) {
  const defaultLanguage = window.localStorage.getItem('lang');
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'heb');

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: selected => {
      const newLanguage = languageOptions[selected] ? selected : 'heb'
      setUserLanguage(newLanguage);
      window.localStorage.setItem('lang', newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

// get text according to id & current language
export function Text({ tid }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
};