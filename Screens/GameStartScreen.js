import React,{useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button,Keyboard,TouchableWithoutFeedback,Alert} from 'react-native';
import Card from "../components/Card";
import Colors from "../constants/color";
import Input from "../components/Input";

function GameStartScreen(props) {
        const [enteredValue, setEnteredValue] = useState('');
        const [confirm, setConfirm] = useState(false);
        const [selectedNumber, setSelectedNumber] = useState();
        const inputEnteredValue = inputText => {
            setEnteredValue(inputText.replace(/[^0-9]/g,''));
        };
        const resetEnteredValue = () => {
            setConfirm(false);
            setEnteredValue('');
        }

        const confirmValue = () => {
            const selectedNum = parseInt(enteredValue);
            if(selectedNum <= 0 || selectedNum > 99 || isNaN(selectedNum)) {
                Alert.alert('Invalid Number','please enter a number between 1 and 99');
                return;
            }
            setConfirm(true);
            setSelectedNumber(selectedNum);
            setEnteredValue('');

        }

        let output;
    if(confirm) {
         output = <View style={styles.output}>
                    <Text style={styles.textSelect}>Selected number is:</Text>
                    <Text style={styles.textNumber}>{selectedNumber}</Text>
                    <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)}/>
                  </View>
    }




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
                <View style={styles.button}><Button title="Reset" color={Colors.accent} onPress={resetEnteredValue}/></View>
               <View style={styles.button}><Button title="Start" color={Colors.primary} onPress={confirmValue}/></View>

            </View>
          </Card>
          {output}
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
    },
    output: {
        flex:2,
        alignItems:'center',
        marginVertical:10,
        paddingVertical:10
    },
    textNumber: {
        paddingTop:10,
        color:'red',
        fontWeight:'bold',
        fontSize:40
    },
    textSelect: {
        fontSize:20,
        fontWeight:'bold'
    }

})

export default GameStartScreen;