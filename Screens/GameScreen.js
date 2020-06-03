import React, {useState,useRef,useEffect} from  'react';
import {Text,View,StyleSheet,Button,Alert,ScrollView} from 'react-native';
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
    const initialGuess = generateRandomBetween(1,100,props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
     const[pastGuess, setPastGuess] = useState([initialGuess]);

     const currentLow=useRef(1);
    const currentHigh=useRef(100);

    useEffect(() =>{
        if(currentGuess === props.userChoice){
            props.onGameOver(pastGuess.length);
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
                 currentLow.current=currentGuess + 1;
             }

         }
         const nextGuess = generateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
         setCurrentGuess(nextGuess);
         setPastGuess(currPastGuest => [nextGuess,...currPastGuest]);

             }

        return (
            <View style={styles.screen}>
                <Text style={styles.textSelect}>Computer guess number</Text>
                <Text style={styles.textNumber}>{currentGuess}</Text>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={guessNextNumber.bind(this,'Low')}/>
                <Button title="GREATER" onPress={guessNextNumber.bind(this,'High')}/>
            </Card>
                <Text>Current Guesses:</Text>
                <ScrollView>
                    {pastGuess.map(guess =><View key={guess}><Text>{guess}</Text></View>)}

                </ScrollView>


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