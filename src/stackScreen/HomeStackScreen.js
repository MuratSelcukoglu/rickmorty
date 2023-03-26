import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Detail from '../screen/Detail';
import CharacterDetail from '../screen/CharacterDetail';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home Page" component={Home} />
      <HomeStack.Screen name="Detail Page" component={Detail} />
      <HomeStack.Screen
        name="CharacterDetail Page"
        component={CharacterDetail}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
