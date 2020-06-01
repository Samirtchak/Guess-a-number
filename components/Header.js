import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Header(props) {

    return (
      <View style={styles.container}>
          <Text style={styles.header}>{props.title}</Text>
      </View>


    );

}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        paddingTop:36,
        height:90,
        backgroundColor:'crimson',
        alignItems:'center',
        justifyContent:'center'
    },
    header: {
        fontSize:18
    }
})

export default Header;