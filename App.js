import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './screen/navigation/AppNavigation';
import {ThemeProvider} from './ThemeContext';
import {Provider} from 'react-redux';
import {store} from './screen/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
