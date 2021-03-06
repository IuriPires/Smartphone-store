import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MainList from './pages/MainList';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="MainList" component={MainList} />
        <AppStack.Screen name="Detail" component={Detail} />
        <AppStack.Screen name="Cart" component={Cart} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
