import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import Card from "../components/Card";

function GameStartScreen(props) {
    return (
      <View style={styles.screen}>
          <Text style={styles.startGameTitle}>Start a New Game!</Text>
          <Card style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <TextInput/>
            <View style={styles.buttonContainer}>
                <Button title="Reset"/>
                <Button title="Start"/>

            </View>
          </Card>
      </View>


    );


}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        paddingTop:10,
        alignItems:'center'
    },
    startGameTitle: {
      fontWeight:'bold',
      fontSize:20,
      marginVertical:10
    },

    inputContainer: {
        width:300,
        maxWidth:'80%',
        alignItems: 'center'
    },
    buttonContainer: {
        width:'80%',
        flexDirection:'row',
        justifyContent:'space-between'
    }

})

export default GameStartScreen;