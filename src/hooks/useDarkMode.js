import { useState } from 'react';
import useLocalStorage from './useLocalStorage';


export const useDarkMode = () =>{
    const [darkMode, setDarkMode] = useLocalStorage(darkMode);

    useEffect(() =>{
        const body = document.querySelector('body');
        (useLocalStorage(darkMode) ? body.classList.add('dark-mode') : body.classList.remove('dark-mode'));
      }, [darkMode])


      return [darkMode, setDarkMode];
}