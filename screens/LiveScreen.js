import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class LiveScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      days:'',
      hours:'',
      minutes:'',
      seconds:'',
      something:'Hi'
    }
  }
  componentDidMount(){
    this.countDownClock();
  }
  countDownClock=()=>{
    var countDownDate = new Date('July 5, 2019 19:30:00').getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance %(1000 * 60 * 60 *24))/(1000 * 60 * 60));
    var minutes = Math.floor((distance %(1000 * 60 * 60)) /(1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60))/1000);
    var clock = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    this.setState({
      days:days,
      hours:hours,
      minutes:minutes,
      seconds:seconds,
    });
  }
  render(){
    return(
      <View>
        
      </View>
    )
  }
}
