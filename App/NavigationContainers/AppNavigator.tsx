import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import UsersList from '../Screens/UsersList';
import UserProfile from '../Screens/UserProfile';


export type NavigationProps = NativeStackScreenProps<any>;

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen
          component={Home}
          name={'Home'}
          />
        <Stack.Screen
          component={UsersList}
          name={'UsersList'}
          />
        <Stack.Screen
          component={UserProfile}
          name={'UserProfile'}
          />
      </Stack.Navigator>
    </NavigationContainer>
)}