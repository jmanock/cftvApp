import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class LiveScreen extends Component{
  componentWillMount(){
    this.countDownClock();
  }
  countDownClock(){
    // get todays date and time
    // get the difference
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    var day = new Date().getDate();
    var month = new Date().getMonth()+1;
    var year = new Date().getFullYear();
    var nextEvent = new Date('2019/07/05');
    var dayz = new Date(`${year}/${month}/${day}`);
    var diff = Math.abs(nextEvent - dayz);
    var secondsTillEvent = diff / 1000;
    var minutesTillEvent = secondsTillEvent/60;
    var hoursTillEvent = minutesTillEvent/60;
    var daysTillEvent = hoursTillEvent / 24;
    var something = `${daysTillEvent}:${hoursTillEvent /24 }:${minutesTillEvent/60}:${secondsTillEvent/60}`;
    console.log(minutesTillEvent/60/24)
  }
  render(){
    return(
      <View>
        <Text>Live Screen</Text>
      </View>
    )
  }
}
