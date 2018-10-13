/* tslint: disable */

import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Input, Icon, Item } from 'native-base';
// import Constants from './Constants';

export default class AppBar extends React.Component {
  state: {
    search: string;
    isLoading: boolean;
  };

  handleInput = (text: string) => {
    this.setState({ search: text });
  }

  handleEnter = (e: any) => {
    console.log(this.state.search);
    this.setState({ isLoading: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <View style={styles.appBar}>
          <Item style={{ marginLeft: 10 }}>
            <Icon active name='search' />
            <Input
              placeholder='Search for an article'
              onChangeText={this.handleInput}
              onSubmitEditing={this.handleEnter}
            />
          </Item>
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
