import React,{useState,createContext} from 'react'
import { Text,View,Button } from 'react-native'

const ThemeContext=createContext();
const ThemeProvider=({children})=>{
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const value={
        theme,
        toggleTheme
    }
   return(
    <ThemeContext.Provider value={value}>
    {children}
    </ThemeContext.Provider>
   )
}
export {ThemeContext,ThemeProvider}