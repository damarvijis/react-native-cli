import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Provider as PaperProvider } from "react-native-paper"
import FeatherIcon from "react-native-vector-icons/Feather"
import EventScreen from "./internal/Event/screen"
import HomeScreen from "./internal/Home/screen"

const Tab = createBottomTabNavigator()

const App = () => (
  <PaperProvider>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === "Nightlife") {
              iconName = "moon"
            } else if (route.name === "Event") {
              iconName = "calendar"
            } else if (route.name === "Friends") {
              iconName = "users"
            } else if (route.name === "Profile") {
              iconName = "user"
            } else if (route.name === "Order") {
              iconName = "grid"
            } else {
              iconName = "grid"
            }

            return <FeatherIcon name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "#04FF98",
          tabBarInactiveTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#1C1C22",
            paddingVertical: 5,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        })}
      >
        <Tab.Screen name="Nightlife" component={HomeScreen} options={{ tabBarLabel: "Nightlife" }} />
        <Tab.Screen name="Event" component={EventScreen} options={{ tabBarLabel: "Event" }} />
        <Tab.Screen name="Friends" component={EventScreen} options={{ tabBarLabel: "Friends" }} />
        <Tab.Screen name="Profile" component={EventScreen} options={{ tabBarLabel: "Profile" }} />
        <Tab.Screen name="Order" component={EventScreen} options={{ tabBarLabel: "Order" }} />
      </Tab.Navigator>
    </NavigationContainer>
  </PaperProvider>
)

export default App
