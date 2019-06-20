import React,{Component} from 'react';
import {ListItem} from 'react-native-elements';
import {StyleSheet, FlatList, Dimensions,View, Text} from 'react-native';

const DataUpcoming = [
  {key:'0',date:'7-5-2019', name:'Jacksonville Sharks @ Orlando Predators', time:'7:00pm',location:'Amway Center'},
  {key:'1',date:'7-11-2019', name:'Bike Night', time:'8:00pm', location:'Ace Cafe'},
  {key:'2',date:'7-13-2019', name:'Orlando Predators @ Carolina Cobras', time:'7:00pm',location:'Greensboro Coliseum'},
  {key:'3',date:'7-15-2019', name:'Porsche Night', time:'7:30pm', location:'Ace Cafe'},
  {key:'4',date:'7-19-2019',name:'Columbus Lions @ Orlando Predators', time:'7:00pm', location:'Amway Center'},
  {key:'5',date:'7-25-2019',name:'Bike Night', time:'8:00pm', location:'Ace Cafe'},
  {key:'6',date:'7-27-2019',name:'Orlando Predators @ Jacksonville Sharks', time:'7:00pm', location:'Jacksonville Veterans Memorial Arena'},
];
const DataPast = [
  {key:'0',link:'https://www.youtube.com/embed/lIFFUwGH1HA',date:'6-17-2019', title:'Porsche Night', time:'51:19', location:'Ace Cafe Orlando'},
  {key:'1',link:'https://www.youtube.com/embed/purW4UWz4QE',title:'Massachusetts Pirates @ Orlando Predators', location:'Amway Center', time:'2:44:01',date:'6-15-2019'},
  {key:'2',link:'https://www.youtube.com/embed/hBOoZWkjjOk', title:'Bike Night', location:'Ace Cafe Orlando', time:'1:10:26', date:'6-13-2019'},
  {key:'3',link:'https://firebasestorage.googleapis.com/v0/b/cftv-fd2b9.appspot.com/o/predsjax.mp4?alt=media&token=264fb066-7d0c-499c-9f46-0fcd3bc55acb', date:'5-31-2019', title:'Jacksonville Sharks @ Orlando Predators', location:'Amway Center', time:'3:41:14'},
  {key:'4',link:'https://www.youtube.com/embed/8t9CHziGB08', date:'5-25-2019', title:'Orlando Predators @ Carolina Cobras', location:'Greensboro Coliseum', time:'3:44:30'},
  {key:'5',link:'https://www.youtube.com/embed/2eIVHn2KP7Q', date:'5-23-2019', title:'Bike Night', location:'Ace Cafe Orlando', time:'48:48'},
  {key:'6',link:'https://www.youtube.com/embed/o7K4l8GQqSU', date:'5-20-2019', title:'Porsche Night', location:'Ace Cafe Orlando', time:'54:53'},
  {key:'7',link:'https://www.youtube.com/embed/V1EQ1URXog4', date:'5-18-2019', title:'Armed Forces Day with Harlequin Part 1', time:'43:38', location:'The Lakefront Park, Kissimmee, FL'},
  {key:'8',link:'https://www.youtube.com/embed/T1qeuWfpfCk', date:'5-18-2019', title:'Armed Forces Day with Harlequin Part 2', time:'43:54', location:'The Lakefron Park, Kissimmee, FL '},
  {key:'9',link:'https://www.youtube.com/embed/vOVta83oaLQ', date:'5-18-2019', title:'Orlando Predators @ Jacksonville Sharks', location:'Jacksonville Veterans Memorial Arena', time:'2:50:03'},
  {key:'10',link:'https://www.youtube.com/embed/SbfquqH95TI', date:'05-12-2019', title:'New York Streets @ Orlando Predators', location:'Amway Center', time:'3:06:14'},
  {key:'11',link:'https://www.youtube.com/embed/II27XVNJIwc', date:'05-09-2019', title:'Bike Night', location:'Ace Cafe Orlando', time:'57:45'},
  {key:'12',link:'https://www.youtube.com/embed/l9yIFLtw9Ck', date:'04-25-2019', title:'Bike Night', location:'Ace Cafe Orlando', time:'1:15:01'},
  {key:'13',link:'https://www.youtube.com/embed/Ofx6dt2myqg', date:'04-15-2019', title:'Porsche Night', location:'Ace Cafe Orlando', time:'53:19'},
  {key:'14',link:'https://www.youtube.com/embed/-oy_QiYymQc', date:'03-28-2019', title:'Bike Night', location:'Ace Cafe Orlando', time:'1:20:34'},
  {key:'15',link:'https://www.youtube.com/embed/GyS81ARplKQ', date:'03-18-2019', title:'Porsche Night', location:'Ace Cafe Orlando', time:'54:24'},
  {key:'16',link:'https://www.youtube.com/embed/u66-QQ8f7YQ', date:'03-14-2019', title:'Bike Night', location:'Ace Cafe Orlando', time:'1:06:49'}
];

export default class ScheduleScreen extends Component{
  getUpcomingData(){
    return DataUpcoming.map(function(x,y){
      const title = `${x.date} | ${x.name} | ${x.location} | ${x.time}`;
      return(
        <ListItem key={x.key} title={title} titleStyle={styles.list}/>
      )
    })
  }
  getPastData(){
    return DataPast.map(function(x,y){
      const title = `${x.date} | ${x.title} | ${x.location} | ${x.time}`;
      return(
        <ListItem key={x.key} title={title} titleStyle={{color:'blue',fontSize:11}}/>
      )
    })
  }
  render(){

    return(
      <View style={styles.container}>
        <Text>Upcoming</Text>
        <FlatList data={DataUpcoming} renderItem={this.getUpcomingData} />
        <Text>Past</Text>
        <FlatList data={DataPast} renderItem={this.getPastData} />
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
