import React from 'react'
import TabHome from './screen/tab/TabHome';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './screen/navigation/AppNavigation';
const App = () => {
  return (
    // <TabHome/>
    <NavigationContainer>
      <AppNavigation/>
      
    </NavigationContainer>
    
  );
};

export default App;
