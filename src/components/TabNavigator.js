import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
const Tab = createBottomTabNavigator();

const tabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      ScreenOptions={{
        headerShown: false,
        TabBarActiveTintColor: '#5882FA',
        tabBarStyle: {
          backgroundColor: '#0431B4',
        },
      }}
    >
      <Tab.Screen
        name="Conta"
        component={Login}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={
                (styles.homeIconContainer,
                focused && styles.homeIconContainerFocused)
              }
            >
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={40}
                color={color}
              />
            </View>
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name={'Categoria'}
        component={Chat}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'menu' : 'menu-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default tabNavigator;

const styles = StyleSheet.create({
  homeIconContainer: {
    backgroundColor: '#0431B4',
    borderColor: '#0431B4',
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    marginTop: -25,
    width: 65,
    height: 65,
    alignItems: 'center',
  },
  homeIconContainerFocused: {
    borderColor: '#0431B4',
  },
});
