/* tslint: disable */

import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Input, Icon, Item } from 'native-base';
// import Constants from './Constants';

interface IAppBarProps {
  callback: any
}

export default class AppBar extends React.Component<IAppBarProps, {}> {
  state: {
    search: string;
  };

  handleInput = (text: string) => {
    this.setState({ search: text });
  }

  handleEnter = (e: any) => {
    e = e;
    console.log(this.state.search);
    this.props.callback(this.state.search);
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
    marginLeft: 20, marginRight: 20,
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
