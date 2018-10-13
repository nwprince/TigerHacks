import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { Icon } from 'native-base';
import Constants from './Constants';

export default class AppBar extends React.Component {
  static render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <View style={styles.appBar}>
          <Icon style={styles.icon}  name='search' />
          <Text style={styles.text}>{Constants.AppName}</Text>
          <Icon style={styles.icon} name='user' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: StatusBar.currentHeight + 56,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },

  statusBar: {
    height: StatusBar.currentHeight
  },

  appBar: {
    flexDirection: 'row',
    flex: 1,
    margin: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2
  },

  text: {
    fontSize: 24
  },

  icon: {
    margin: 12
  }
});
