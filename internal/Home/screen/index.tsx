import { ScrollView, StyleSheet, Text } from "react-native"

const HomeScreen = () => (
  <ScrollView contentInsetAdjustmentBehavior="automatic">
    <Text style={styles.text}>HomeScreen</Text>
    <Text style={styles.text}>HomeScreen</Text>
    <Text style={styles.text}>HomeScreen</Text>
    <Text style={styles.text}>HomeScreen</Text>
    <Text style={styles.text}>HomeScreen</Text>
    <Text style={styles.text}>HomeScreen</Text>
    <Text style={styles.text}>HomeScreen</Text>
  </ScrollView>
)

const styles = StyleSheet.create({
  text: {
    color: "#FBFDFF",
  },
})

export default HomeScreen
