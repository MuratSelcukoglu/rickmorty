import * as React from 'react';
import {View, Image, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from '../stackScreen/HomeStackScreen';
import FavoriteStackScreen from '../stackScreen/FavoriteStackScreen';

const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <Tab.Navigator
        useLegacyImplementation
        initialRouteName="Home"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#31312d',
            shadowColor: '#fff',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11,
            padding: 5,
            borderTopWidth: 2,
            borderTopColor: 'lightgrey',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.icons}>
                <Image
                  source={require('../assets/icons/home.png')}
                  resizeMode="contain"
                  style={{
                    width: 35,
                    height: 35,
                    tintColor: focused ? '#fff' : '#a3a1a0',
                  }}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Favorite"
          component={FavoriteStackScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.icons}>
                <Image
                  source={require('../assets/icons/icon.png')}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
                    tintColor: focused ? '#fff' : '#a3a1a0',
                  }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Navigation;
