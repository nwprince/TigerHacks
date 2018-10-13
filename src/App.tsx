import React from 'react';
import AppBar from './components/AppBar';

import { ActivityIndicator, View } from 'react-native';
import Constants from './components/Constants';

interface IAppState {
  isLoadingSearch: boolean;
}

export default class App extends React.Component<{}, IAppState> {
  private queryData: any;

  constructor(props: any) {
    super(props);
    this.state = {
      isLoadingSearch: false
    };
  }

  handleSearchPress = (text: string) => {
    text = text;
    console.log('success');
    this.setState({ isLoadingSearch: true });
  }

  fetchFromQuery(query: string) {
    fetch(Constants.AppUrl + '?' + query + '=10').then(response => {
      return response.json();
    }).then(response => {
      this.queryData = response;
      this.setState({isLoadingSearch: false});
    });
  }

  render() {
    let ActivityElement: any = undefined;

    if (this.state.isLoadingSearch === true) {
      ActivityElement = <ActivityIndicator size='large' />;
    }

    console.log(this.queryData);

    return (
      <View>
        <AppBar callback={this.handleSearchPress} />
        {ActivityElement}
      </View>
    );
  }
}
