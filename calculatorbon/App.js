import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import InputNumberButton from './InputNumberButton';

const buttons = [
  ['CLEAR', 'DEL'],
  ['7', '8', '9', ':'],
  ['4', '5', '6', 'x'],
  ['1', '2', '3', '-'],
  ['0', '.', '=', '+']

];
export default class App extends Component {
  constructor() {
    super()
    this.initialState = {
      displayValue: '0',
      operator: null,
      firstValue: '',
      secondValue: '',
      nextValue: false,
      value1: 0,
      value2: 0
    }
    this.state = this.initialState;
  }

  kq(firstValue, operator, secondValue) {
    console.log(firstValue, operator, secondValue)
    return eval(firstValue + operator + secondValue);
  }
  
  renderButtons() {
    let layouts = buttons.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
        return <InputNumberButton
          value={buttonItems}
          handleOnPress={this.handleInput.bind(this, buttonItems)}
          key={'btn-' + buttonIndex}
        />
      });
      return <View style={styles.inputRow} key={'row-' + index}>{rowItem}</View>
    });
    return layouts
  }
  handleInput = (input) => {
    const { displayValue, operator, firstValue, secondValue, nextValue } = this.state;
    switch (input) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.setState({
          displayValue: (displayValue === '0') ? input : displayValue + input
        })
        if (!nextValue) {
          this.setState({
            firstValue: firstValue + input
          })
        } else {
          this.setState({
            secondValue: secondValue + input
          })
        }
        break;
      case '+':
      case '-':
      case 'x':
      case ':':
        let format = (operator == 'x') ? '*' : (operator == ':') ? '/' : operator
        // let result = eval(firstValue + formatOperator + secondValue)
        // this.setState({
        //   displayValue: result,
        //   firstValue:result,
        //   secondValue:'',
        //   operator: null,
        //   nextValue: false
        // })
        let resu;
        //let manhinh;
        if (operator !== null) {
          resu = this.kq(firstValue, format, secondValue || '1');
          //this.firstValue=resu;
          //manhinh=resu + input;
        } else {
          resu = displayValue;

          //manhinh= displayValue ;
        }

        this.setState({
          displayValue: resu + input,

          nextValue: true,
          operator: input,
          firstValue: resu,

          secondValue: '',


        })
        break;
      case '.':
        let dot = displayValue.toString().slice(-1);
        let ktdot1 = firstValue.indexOf('.');
        let ktdot2 = secondValue.indexOf('.');

        console.log(secondValue)

        // this.setState({
        //   value1: (dot =='.' || ktdot1 != -1)  ?  displayValue: displayValue + input,
        //   value2: (dot =='.' || ktdot2 != -1)  ?  displayValue: displayValue + input,
        //   displayValue: this.value1
        // })
        if (firstValue && !secondValue) {
          this.setState({
            displayValue: (dot == '.' || ktdot1 != -1) ? displayValue : displayValue + input
          })
        } else if (firstValue && secondValue) {
          this.setState({
            displayValue: (dot == '.' || ktdot2 != -1) ? displayValue : displayValue + input
          })
        }

        // this.setState({
        //   displayValue: (dot=='.'|| ktdot1 != -1 || ktdot2 !=-1 )? displayValue :displayValue + input
        // })
        //console.log(this.state.value1);
        //ky tu cuoi khac cham hoac gia tri mot chua ton tai
        if (!nextValue) {
          this.setState({
            firstValue: firstValue + input
          })
        } else {
          this.setState({
            secondValue: secondValue + input
          })
        }
        break;
      case '=':
        let formatOperator = (operator == 'x') ? '*' : (operator == ':') ? '/' : operator
        let result = eval(firstValue + formatOperator + secondValue)
        this.setState({
          displayValue: result,
          firstValue: result,
          secondValue: '',
          operator: null,
          nextValue: false
        })
        break;

      case 'CLEAR':
        this.setState(this.initialState);
        break;
      case 'DEL':
        let string = displayValue.toString();
        let deletedString = string.substr(0, string.length - 1);
        let length = string.length;
        this.setState({
          displayValue: length == 1 ? '0' : deletedString
        })
        break;
    }

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            {this.state.displayValue}
          </Text>
        </View>

        <View style={styles.inputContainer}>
          {this.renderButtons()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  resultContainer: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  inputContainer: {
    flex: 7,
    backgroundColor: 'black'
  },
  resultText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'right'

  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  }

});