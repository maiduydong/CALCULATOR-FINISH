import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import ResultDisplay from './ResultDisplay';

export default class Buttons extends Component {

  constructor(props){
    super(props);
    this.my = this.my.bind(this);
    this.state = {totalValue: ''};
  }
  my(value) {
    //alert(value);
    const oldValue = this.state.totalValue;
    const newValue = oldValue + value;
    this.setState({totalValue: newValue});
    this.props.onStateChange && this.props.onStateChange(newValue);
  }
  render() {
    return (
      <View style = {styles.parent}>
        <View style = {styles.row}>
          <TouchableOpacity style = {styles.cell} onPress={this.my.bind(this, "1")}>
            <View>
              <Text style = {styles.text}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} onPress={this.my.bind(this, "4")}>
            <View>
              <Text style = {styles.text}>4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} onPress={this.my.bind(this, "7")}>
            <View>
              <Text style = {styles.text}>7</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style = {styles.row}>
          <TouchableOpacity style = {styles.cell} onPress={this.my.bind(this, "2")}>
            <View>
              <Text style = {styles.text}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} onPress={this.my.bind(this, "5")}>
            <View>
              <Text style = {styles.text}>5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} onPress={this.my.bind(this, "8")}>
            <View>
              <Text style = {styles.text}>8</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style = {styles.row}>
          <TouchableOpacity style = {styles.cell} onPress={this.my.bind(this, "3")}>
            <View>
              <Text style = {styles.text}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} onPress={this.my.bind(this, "6")}>
            <View>
              <Text style = {styles.text}>6</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} onPress={this.my.bind(this, "9")}>
            <View>
              <Text style = {styles.text}>9</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style = {styles.row}>
          <TouchableOpacity style = {styles.cell} onPress={this.my.bind(this, "+")}>
            <View>
              <Text style = {styles.text}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} onPress={this.my.bind(this, "-")}>
            <View>
              <Text style = {styles.text}>-</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} onPress={this.my.bind(this, "=")}>
            <View>
              <Text style = {styles.text}>=</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cell} onPress={this.my.bind(this, "0")}>
            <View>
              <Text style = {styles.text}>0</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 2,
    padding: 2,
    flexDirection: 'row',
  },
  row: {
    flex: 1,
    flexDirection: 'column',
  },
  cell: {
    flex: 1,
    backgroundColor: 'rgb(26, 164, 147)',
    borderWidth: 2,
    borderColor: 'rgb(231, 206, 244)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});