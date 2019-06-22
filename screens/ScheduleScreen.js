import React,{Component} from 'react';
import {ListItem} from 'react-native-elements';
import {StyleSheet, FlatList,View, Text} from 'react-native';
import Data from '../api/Data';


export default class ScheduleScreen extends Component{
  render(){
    return(
      <Text>Fuck Data</Text>
    )
  }
}

ScheduleScreen.navigationOptions = {
  title:'ScheduleScreen'
};

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  list:{
    fontSize:10,
    color:'red'
  }
})
