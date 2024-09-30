// Importa los módulos necesarios
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './presentation/navigation/Navigation'; // Importa el StackNavigator

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
