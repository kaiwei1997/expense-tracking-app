import React, { Component } from 'react';
import { TextInput, Text, View,
  TouchableWithoutFeedback,
  Keyboard, } from 'react-native';
import styles from '../../styles/Styles'
import CardInput from '../../components/CardInput';
import CardButton from '../../components/CardButton';

export default class pageTwo extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    monthAllow: this.props.navigation.getParam('monthAllow'),
    leftDays: this.props.navigation.getParam('leftDays'),
    monthLeft: null
  }
  changeText = text => {
    this.setState({
      monthLeft: text
    })
  }
  onPressDone = () => {
    if(this.state.monthLeft !== null) {

      this.props.navigation.state.params.setIsFirst();
      this.props.navigation.navigate('Main', {
        monthLeft: this.state.monthLeft,
        dayTotal: (this.state.monthLeft)/(this.state.leftDays)
      });

    }
  }
  render() {
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{ flexDirection: 'column', alignItems: 'center'}}>
       <View style={{ padding: 100 }} />

      <Text style={{padding: 20, textAlign:'center', fontSize: 40, fontWeight: 'bold'}}> How much you have left? </Text>
      <CardInput
        placeholder="RM0.00"
        style={styles.mainModalFontInput}
        autoFocus={true}
        keyboardType='decimal-pad'
        changeText={this.changeText}
      />
       <View style={{ padding: 15 }} />
      <CardButton
        name="Done"
        style={styles.cardButtonSmall}
        onPress={this.onPressDone}
      />
       <View style={{ padding: 95 }} />

      </View>
     </TouchableWithoutFeedback>
    );
  }
}