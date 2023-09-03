import React from "react";
import Tabs from "./src/stack";
import { Text, View } from "react-native";

const App = () => {
  return (
    <>
      <View>
        <Text style={{fontSize:18,backgroundColor:'white',textAlign:'center',marginTop:12,color:'black'}}>Checkins</Text>
      </View>
      <Tabs />
    </>
  )
}
export default App