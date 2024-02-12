import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from '../Screens/LoginScreen'
import RagisterScreen from '../Screens/RagisterScreen'
import HomeScreen from '../Screens/HomeScreen'
import ProfileScreen from '../Screens/ProfileScreen';
import CarouselPage from '../Components/CarouselPage';


import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import StudentInfoScreen from '../Screens/StudentInfoScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" />
              ) : (
                <AntDesign name="home" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "#008E97" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person"/>
              ) : (
                <Ionicons name="person-outline" />
              ),
          }}
        />

      </Tab.Navigator>
    );
  }
  return <NavigationContainer>

    <Stack.Navigator initialRouteName='Main'>


      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Car'
        component={CarouselPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Register"
        component={RagisterScreen}
        options={{ headerShown: false }}
      />
        <Stack.Screen
          name="Info"
          component={StudentInfoScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

      {/* <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  </NavigationContainer>
}

export default StackNavigator

const styles = StyleSheet.create({})