import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View } from 'react-native';
import {useEffect} from "react";
import {getKeyHashAndroid, initializeKakaoSDK} from "@react-native-kakao/core";
import {login} from "@react-native-kakao/user";

export default function App() {
  useEffect(() => {
    initializeKakaoSDK("3983ee1fe5a62821b36bd28609a27185")
    getKeyHashAndroid().then(console.log)
  })
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Button" onPress={() => {
        login().then(console.log)
      }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
