import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";


export const LangContext = createContext();

const LangContextProvider = ({children}) => {
    
    const { i18n } = useTranslation();

    const [currentLang, setCurrentLang] = useState('עברית');

    const changeLanguage = () => {
        const lng = currentLang === 'עברית' ? 'en' : 'עברית'
        setCurrentLang(lng)
        i18n.changeLanguage(lng);
        localStorage.setItem('lang', lng);
    };
    
    useEffect(() => {
        const lng = localStorage.getItem('lang');
        setCurrentLang(lng ? lng : 'עברית')

    }, []);
    
    return ( 
        <LangContext.Provider value={{ changeLanguage, currentLang }}>
            {children}
        </LangContext.Provider>
     );
}
 
export default LangContextProvider;