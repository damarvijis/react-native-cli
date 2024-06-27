import { ScrollView } from "react-native"
import { Text } from "react-native-paper"
import styled from "styled-components/native"

const BookingScreen = () => (
  <Container>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Description>BookingScreen</Description>
    </ScrollView>
  </Container>
)

const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #1c1c22;
`

const Description = styled(Text)`
  color: #fff;
`

export default BookingScreen
