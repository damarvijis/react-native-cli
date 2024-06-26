import { ScrollView, StyleSheet, Text } from "react-native"

const EventScreen = () => (
  <ScrollView contentInsetAdjustmentBehavior="automatic">
    <Text style={styles.text}>EventScreen</Text>
    <Text style={styles.text}>EventScreen</Text>
    <Text style={styles.text}>EventScreen</Text>
    <Text style={styles.text}>EventScreen</Text>
    <Text style={styles.text}>EventScreen</Text>
    <Text style={styles.text}>EventScreen</Text>
    <Text style={styles.text}>EventScreen</Text>
  </ScrollView>
)

const styles = StyleSheet.create({
  text: {
    color: "#FBFDFF",
  },
})

export default EventScreen
