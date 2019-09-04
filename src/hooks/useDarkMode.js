import { useState } from 'react';
import useLocalStorage from './useLocalStorage';


export const useDarkMode = () =>{
    const [darkMode, setDarkMode] = useLocalStorage('dmStatus', '');

    useEffect(() =>{
        const body = document.querySelector('body');
        (useLocalStorage(darkMode) ? body.classList.remove('dark-mode') : body.classList.add('dark-mode'));
      }, [darkMode])


      return [darkMode, setDarkMode];
}