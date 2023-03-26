import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favorite from '../screen/Favorite';
import CharacterDetail from '../screen/CharacterDetail';

const FavoriteStack = createNativeStackNavigator();

const FavoriteStackScreen = () => {
  return (
    <FavoriteStack.Navigator screenOptions={{headerShown: false}}>
      <FavoriteStack.Screen name="Favorite Page" component={Favorite} />
      <FavoriteStack.Screen
        name="CharacterDetail Page"
        component={CharacterDetail}
      />
    </FavoriteStack.Navigator>
  );
};

export default FavoriteStackScreen;
