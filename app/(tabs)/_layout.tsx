import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#ffd33d',
            headerShown: false,
            headerShadowVisible: false,
            headerTintColor: '#fff',
            tabBarStyle: {
                backgroundColor: '#7d3fa3ff',
            },
        }} 
    >
      <Tabs.Screen
        name="index" 
        options={{ 
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home'} color={color} size={24} />
          ),
        }} />
      
      <Tabs.Screen
        name="WorkOut"
        options={{
            title: "WorkOut",
            tabBarIcon: ({color, focused}) => (
                <Ionicons name = {focused ? 'pizza-outline' : 'pizza-sharp'} color={color} size={24} />
            ),
        }}/>
        <Tabs.Screen
            name = "Food"
            options = {{
                title: "Food",
                tabBarIcon: ({color, focused}) => (
                    <Ionicons name = {focused? 'pizza-outline' : 'pizza-sharp'} color = {color} size = {24} />
                )
        }} />

        <Tabs.Screen 
            name="Account" 
            options={{ 
                title: 'Account',
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
                ),
        }} />

    </Tabs>
  );
}