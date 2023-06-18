import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './screen/navigation/AppNavigation';
// import { AuthProvider } from './context/AuthContext';
const App = () => {
  return (
    // <TabHome/>
    // <AuthProvider>
       <NavigationContainer>
      <AppNavigation/>
      
    </NavigationContainer>
    // </AuthProvider>
   
    
  );
};

export default App;
