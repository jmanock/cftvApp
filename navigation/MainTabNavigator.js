import React from 'react';
import {Platform,StyleSheet} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {ScheduleScreen,AboutScreen,LiveScreen,ClipsScreen} from '../screens';
import TabBarIcon from '../components/TabBarIcon';
import {MaterialIcons as Icon} from 'react-native-vector-icons';
import{MaterialCommunityIcons as MCIcons} from 'react-native-vector-icons';

const LiveStack = createStackNavigator({
  Live:LiveScreen,
});
LiveStack.navigationOptions = {
  tabBarLabel:'Live',
  tabBarIcon:({focused}) => (
    <TabBarIcon focused={focused} name={'md-tv'} />
  )
};
const ScheduleStack = createStackNavigator({
  Schedule:ScheduleScreen
});
ScheduleStack.navigationOptions = {
  tabBarLabel:'Schedule',
  tabBarIcon:({focused}) =>(
    <Icon focused={focused} name={'schedule'} style={styles.icon} />
  )
};
const ClipsStack = createStackNavigator({
  Clips:ClipsScreen
});
ClipsStack.navigationOptions = {
  tabBarLabel:'Clips',
  tabBarIcon:({focused}) =>(
    <Icon focused={focused} name={'motorcycle'} style={styles.icon} />
  )
};
const AboutStack = createStackNavigator({
  About:AboutScreen
});
AboutStack.navigationOptions = {
  tabBarLabel:'About',
  tabBarIcon:({focused}) =>(
    <MCIcons focused={focused} name={'car-sports'} style={styles.icon} />
  )
};
export default createBottomTabNavigator({
  LiveStack,
  AboutStack,
  ClipsStack,
  ScheduleStack,
});
const styles = StyleSheet.create({
  icon:{
    fontSize:25
  }
})
