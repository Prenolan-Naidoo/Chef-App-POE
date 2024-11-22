import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MenuProvider } from './menucontext'; // Import MenuProvider
import HomeScreen from './HomeScreen'; // Import HomeScreen
import ManageMenuScreen from './ManageMenuScreen'; // Import ManageMenuScreen
import FilterMenuScreen from './FilterMenuScreen'; // Import FilterMenuScreen

const Stack = createStackNavigator();

const App = () => {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Manage Menu" component={ManageMenuScreen} />
          <Stack.Screen name="Filter Menu" component={FilterMenuScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;
