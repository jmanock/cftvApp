import React from 'react';
import {Platform,StyleSheet} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import BikesScreen from '../screens/BikesScreen';
import CarsScreen from '../screens/CarsScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ShowsScreen from '../screens/ShowsScreen';
import TabBarIcon from '../components/TabBarIcon';
import {MaterialIcons as Icon} from 'react-native-vector-icons';
import{MaterialCommunityIcons as MCIcons} from 'react-native-vector-icons';

const ShowsStack = createStackNavigator({
  Show:ShowsScreen,
});
ShowsStack.navigationOptions = {
  tabBarLabel:'Shows',
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
const BikesStack = createStackNavigator({
  Bikes:BikesScreen
});
BikesStack.navigationOptions = {
  tabBarLabel:'Bikes',
  tabBarIcon:({focused}) =>(
    <Icon focused={focused} name={'motorcycle'} style={styles.icon} />
  )
};
const CarsStack = createStackNavigator({
  Cars:CarsScreen
});
CarsStack.navigationOptions = {
  tabBarLabel:'Cars',
  tabBarIcon:({focused}) =>(
    <MCIcons focused={focused} name={'car-sports'} style={styles.icon} />
  )
};
export default createBottomTabNavigator({
  ShowsStack,
  ScheduleStack,
  BikesStack,
  CarsStack
});
const styles = StyleSheet.create({
  icon:{
    fontSize:25
  }
})
