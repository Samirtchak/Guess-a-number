import React,{useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button,Keyboard,TouchableWithoutFeedback} from 'react-native';
import Card from "../components/Card";
import Colors from "../constants/color";
import Input from "../components/Input";

function GameStartScreen(props) {
        const [enteredValue, setEnteredValue] = useState('');
        const inputEnteredValue = inputText => {
            setEnteredValue(inputText.replace(/[^0-9]/g,''));
        };

    return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.screen}>
          <Text style={styles.startGameTitle}>Start a New Game!</Text>
          <Card style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <Input
                style={styles.inputStyle}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                maxLength={2}
                onChangeText={inputEnteredValue}
                value={enteredValue}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title="Reset" color={Colors.accent}/></View>
               <View style={styles.button}><Button title="Start" color={Colors.primary}/></View>

            </View>
          </Card>
      </View>
    </TouchableWithoutFeedback>


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
    },
    button: {
        width:100
    },
    inputStyle:{
        textAlign:'center',
        width:50
    }

})

export default GameStartScreen;