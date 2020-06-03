import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import GameStartScreen from "./Screens/GameStartScreen";
import GameScreen from "./Screens/GameScreen";
import GameOverScreen from "./Screens/GameOverScreen";

export default function App() {
const[userNumber, setUserNumber] =  useState();
const[guessRounds,setGuessRounds] = useState(0);


const gameOverHandler = (roundNumber) => {
        setGuessRounds(roundNumber);
    }

const numberSelected = number => {
    setUserNumber(number);
}

const restartGame = () => {
    setUserNumber(null);
    setGuessRounds(0);
}
    let displayScreen=<GameStartScreen onStartGame={numberSelected}/>;
    if(userNumber && guessRounds == 0) {
        displayScreen=<GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
    }
    else if(guessRounds >0) {
        displayScreen=<GameOverScreen roundCount = {guessRounds} numberWin = {userNumber} restart={restartGame}/>
    }



  return (
    <View style={styles.screen}>
      <Header title="Guess a number"/>
        {displayScreen}
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex:1
    }

});
