import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator } from 'react-navigation-tabs'
import Transaction from './screens/Transaction'
import Search from './screens/Search'

export default class App extends React.Component {
  render(){
  return (


      <A/>

  );}
}
const T = createBottomTabNavigator({
  Transaction:{screen:Transaction},
  Search:{screen:Search}
})
const A = createAppContainer(T)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
