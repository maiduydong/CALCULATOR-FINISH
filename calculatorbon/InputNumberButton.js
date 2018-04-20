import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';




export default class InputNumberButton extends Component {
  render() {
      const {value, handleOnPress} = this.props;
    return (
        <TouchableOpacity
         style={styles.container}
         onPress={()=>handleOnPress(value)}>
            <Text style = {styles.text}>{value}</Text>

        </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin:5,
      backgroundColor: 'yellow',
      justifyContent: 'center' ,
      alignItems: 'center',
      borderRadius: 50,
      borderColor:'red',
      borderWidth:3
      
    },
    text:{
        color: 'black',
        fontSize: 40
    }
   
  });