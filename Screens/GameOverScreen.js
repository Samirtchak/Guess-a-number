import React from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native'

function GameOverScreen(props){
    return(
        <View style={styles.container}>
            <Text>Game Over</Text>
          <View style={styles.imageContainer}>
            <Image style={styles.image} resizeMode="cover" source={require('../assets/original.png')}/>
          </View>
            <Text>Number of rounds: {props.roundCount}</Text>
            <Text>Number was: {props.numberWin}</Text>
            <Button title="Restart" onPress={props.restart}/>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
    imageContainer: {
        width:'80%',
        height:300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },

    image: {
        width:'100%',
        height:300,
    }

})
export default GameOverScreen;