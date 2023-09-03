import { FC } from "react";
import { Text, StyleSheet } from "react-native";
import Tabs from "./src/stack";

const App: FC = () => {
  return (
    <>
      <Text style={styles.title}>Checkins</Text>
      <Tabs />
    </>
  )
}
export default App
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    backgroundColor: 'white',
    textAlign: 'center',
    marginTop: 12,
    color: 'black'
  }
})