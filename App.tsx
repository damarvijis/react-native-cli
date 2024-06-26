import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Provider as PaperProvider, Button, Card, Text, TextInput } from "react-native-paper"
import styled from "styled-components/native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import EventScreen from "./internal/Event/screen"

const Tab = createBottomTabNavigator()

const HomeScreen = () => (
  <Container>
    <TextInput placeholder="Search party" />
    <EventCard>
      <Card.Cover source={{ uri: "https://example.com/event-image.jpg" }} />
      <Card.Content>
        <Title>Saturday Night</Title>
        <Text>Entry $17.5</Text>
        <Text>Ladies Free</Text>
        <Text>Welcome Drinks</Text>
      </Card.Content>
    </EventCard>
    <FindBestPlace>
      <Button icon="facebook" mode="contained">
        Nightclub
      </Button>
      <Button icon="facebook" mode="contained">
        KTV
      </Button>
      <Button icon="facebook" mode="contained">
        Pregames
      </Button>
      <Button icon="facebook" mode="contained">
        Bar
      </Button>
    </FindBestPlace>
  </Container>
)

const App = () => (
  <PaperProvider>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === "Nightlife") {
              iconName = focused ? "moon-waning-crescent" : "moon-waning-crescent-outline"
            } else if (route.name === "Event") {
              iconName = focused ? "calendar" : "calendar-outline"
            } else if (route.name === "Friends") {
              iconName = focused ? "account-group" : "account-group-outline"
            } else if (route.name === "Profile") {
              iconName = focused ? "account" : "account-outline"
            } else if (route.name === "Order") {
              iconName = focused ? "qrcode-scan" : "qrcode"
            } else {
              iconName = focused ? "qrcode-scan" : "qrcode"
            }

            return <Icon name={iconName} size={size} color={color} />
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
        // screenOptions={{
        //   headerShown: false,
        // }}
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

const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #1c1c22;
`

const SearchBar = styled.TextInput`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: #fff;
`

const EventCard = styled(Card)`
  margin-bottom: 16px;
`

const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: #04ff98;
`

const FindBestPlace = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 16px;
`

export default App
