import { Text } from "react-native"
import { Button, Card, TextInput } from "react-native-paper"
import styled from "styled-components/native"

const NightlifeScreen = () => (
  <Container>
    <Text>Bomber</Text>
    <TextInput placeholder="Search party" />
    <EventCard>
      <Card.Cover
        source={{ uri: "https://unsplash.com/photos/neon-sign-reading-bar-cocktails-dreams-disco-party-9P1pZy3gwxg" }}
      />
      <Card.Content>
        <Title>Saturday Night</Title>
        <Text>Entry $17.5</Text>
        <Text>Ladies Free</Text>
        <Text>Welcome Drinks</Text>
      </Card.Content>
    </EventCard>

    <FindBestPlace>
      <Button icon="beer" mode="contained">
        Nightclub
      </Button>
      <Button icon="beer" mode="contained">
        KTV
      </Button>
      <Button icon="beer" mode="contained">
        Pregames
      </Button>
      <Button icon="beer" mode="contained">
        Bar
      </Button>
    </FindBestPlace>
  </Container>
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
  gap: 12px;
  margin-bottom: 16px;
`

export default NightlifeScreen
