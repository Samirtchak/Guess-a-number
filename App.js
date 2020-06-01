import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import GameStartScreen from "./Screens/GameStartScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a number"/>
      <GameStartScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex:1
    }

});
