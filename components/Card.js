import React from 'react';
import {View,StyleSheet} from 'react-native';

function Card(props) {
    return (
      <View style={{...styles.inputContainer,...props.style}}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {

        shadowColor:'black',
        shadowOffset: {width:0, height:2},
        shadowRadius:6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10


    }
})

export default Card;