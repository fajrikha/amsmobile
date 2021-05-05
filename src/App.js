import { NavigationContainer } from '@react-navigation/native';
import { Root } from 'native-base';
import React from 'react';
import { AppStack } from './navigations/AppNavigator';

const App = () => {
  return (
    <Root>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Root>
  );
};


export default App;
