import { useEffect } from 'react';
import  useLocalStorage  from './useLocalStorage';


const useDarkMode = () =>{
    const [darkMode, setDarkMode] = useLocalStorage(false, '');

    useEffect(() =>{
        const body = document.querySelector('body');
        darkMode ? body.classList.remove('dark-mode') : body.classList.add('dark-mode');
      }, [darkMode]);


      return [darkMode, setDarkMode];
}

export default useDarkMode;