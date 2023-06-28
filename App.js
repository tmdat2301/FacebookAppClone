import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './screen/navigation/AppNavigation';
import {EventRegister} from 'react-native-event-listeners';
// import theme from './config/theme';
// import ThemeContext from './config/themeContext';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  // const [mode, setMode] = useState(false);
  // useEffect(() => {
  //   let eventListener = EventRegister.addEventListener('changeTheme', data => {
  //     setMode(data);
  //   });
  //   return () => {
  //     EventRegister.removeAllListeners(eventListener);
  //   };
  // });
  // const [theme, setTheme] = React.useState('light');

  // const toggleTheme = () => {
  //   const nextTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(nextTheme);
  // };
  return (
    <ThemeProvider>
       <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </ThemeProvider>
     
  );
};

export default App;
