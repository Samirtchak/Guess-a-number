import React, {useState,useRef,useEffect} from  'react';
import {Text,View,StyleSheet,Button,Alert} from 'react-native';
import Card from "../components/Card";


const  generateRandomBetween = (min,max,exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum  = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude) {
        return generateRandomBetween(min,max,exclude);
    }
    else{
        return rndNum;
    }
}



 function GameScreen(props) {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100,props.userChoice));
     const[numberOfRound, setNumberOfRound] = useState(0);

     const currentLow=useRef(1);
    const currentHigh=useRef(100);

    useEffect(() =>{
        if(currentGuess === props.userChoice){
            props.onGameOver(numberOfRound);
        }
    })


     const guessNextNumber = direction => {
         if((direction == 'Low' && currentGuess < props.userChoice)  || (direction == 'High' && currentGuess > props.userChoice)) {
             Alert.alert('Be honest','stop trying to lie.Be fair');
             return;
         }
         else{
             if(direction == 'Low'){
                 currentHigh.current=currentGuess;
             }
             else{
                 currentLow.current=currentGuess;
             }

         }
         const nextGuess = generateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
         setCurrentGuess(nextGuess);
         setNumberOfRound(currRound => currRound + 1);

             }

        return (
            <View style={styles.screen}>
                <Text style={styles.textSelect}>Computer guess number</Text>
                <Text style={styles.textNumber}>{currentGuess}</Text>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={guessNextNumber.bind(this,'Low')}/>
                <Button title="GREATER" onPress={guessNextNumber.bind(this,'High')}/>
            </Card>


            </View>

        );
 }

 const styles = StyleSheet.create({
     screen:{
         flex:1,
         padding:10,
         alignItems:'center'
     },
     buttonContainer: {
         flexDirection:'row',
         justifyContent:'space-around',
         alignItems:'center',
         marginVertical:10,
         width:300,
         maxWidth:'80%'
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

export default GameScreen;