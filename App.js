import React from 'react';
import { StyleSheet, View, Text, Button  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Init from './components/Init';
import Trainers from './components/Trainers';

const AppNav = StackNavigator({
  Init: { screen: Init },
  Trainers: { screen: Trainers },
});

export default class App extends React.Component {
  render() {
    return (
      <AppNav />
    );
  }
}
