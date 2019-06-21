import React,{Component} from 'react';
import {ListItem} from 'react-native-elements';
import {StyleSheet, FlatList,View, Text} from 'react-native';
import Data from '../api/Data';


export default class ScheduleScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      events:[]
    }
  }
  componentWillMount(){
    this.renderItems();
  }
  renderItems = () =>{
    return this.state.events.map(function(x){
      this.setState({
        events:x
      })
    }.bind(this))
  }
  render(){
    console.log(this.state.events);
    return(
      <View style={styles.container}>
        <Text>Upcoming</Text>

      </View>
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
