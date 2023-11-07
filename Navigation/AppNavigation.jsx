import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../Screens/Welcome';
import Home from '../Screens/Home';
import Map from '../Screens/Map'
import MapDetails from '../Screens/MapDetails';
import Jobs from '../Screens/Jobs'
import JobDetails from '../Screens/JobDetails'

import { AntDesign, Feather, Entypo } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import Settings from '../Screens/Settings';
import TentDetails from '../Screens/TentDetails';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="TentDetails" component={TentDetails} />
        </Stack.Navigator>
    )
}

const MapStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="MapDetails" component={MapDetails} />
        </Stack.Navigator>
    )
}

const JobStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Jobs" component={Jobs} />
            <Stack.Screen name="JobDetails" component={JobDetails} />
        </Stack.Navigator>
    )
}

const SettingsStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    )
}

const BottomNavigator = () => {

    const { colorScheme } = useColorScheme()

    return (
        <Tab.Navigator screenOptions={{ 
            headerShown: false, 
            tabBarActiveTintColor: colorScheme === 'dark' ? 'orange' : 'maroon', 
            tabBarStyle: {
                backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
                paddingTop: 5
                } 
            }}>
            <Tab.Screen name="HomeTab" component={HomeStack} options={{
                tabBarIcon: ({ color }) => <AntDesign name="home" size={30} color={color} />,
                tabBarLabel: "Home"
            }} />

            <Tab.Screen name="MapTab" component={MapStack} options={{
                tabBarIcon: ({ color }) => <Feather name="map-pin" size={30} color={color} />,
                tabBarLabel: "Map"
            }} />

            <Tab.Screen name="JobsTab" component={JobStack} options={{ 
                tabBarIcon: ({ color }) => <Entypo name="network" size={30} color={color} />,
                tabBarLabel: 'Jobs'
             }} />

             <Tab.Screen name="SettingsTab" component={SettingsStack} options={{
                tabBarIcon: ({ color }) => <Feather name="settings" size={30} color={color} />,
                tabBarLabel: "Settings"
             }} />

        </Tab.Navigator>
    )
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <BottomNavigator />
    </NavigationContainer>
  )
}

export default AppNavigation