import React from 'react';
import AppBar from './components/AppBar';

import { ActivityIndicator, View, Alert } from 'react-native';
import Constants from './components/Constants';

interface IAppState {
  isLoadingSearch: boolean;
}

export default class App extends React.Component<{}, IAppState> {
  private queryData: any;

  constructor(props: any) {
    super(props);
    this.state = {
      isLoadingSearch: true
    };

    this.fetchInitial(Constants.InitialTopics);
  }

  handleSearchPress = (text: string) => {
    text = text;
    console.log('success');
    this.setState({ isLoadingSearch: true });
    this.fetchFromQuery(text);
  }

  fetchFromQuery(query: string) {
    fetch(Constants.AppUrl + '?' + query + '=10').then(response => {
      return response.json();
    }).then(this.checkStatus).then(response => {
      this.queryData = response;
      this.setState({isLoadingSearch: false});
    }).catch(e => {
      console.log(e);
      Alert.alert('Error', 'Server is offline');
    });
  }

  fetchInitial(topics: string[]) {
    let queryString: string = undefined;

    queryString += Constants.AppUrl;
    for (let index = 0; index < topics.length; index++) {
      queryString += '?';
      queryString += topics[index];
      queryString += '=3&';
    }
    console.log(queryString);
    queryString = queryString.slice(0, queryString.length - 1);
    console.log(queryString);
    fetch(queryString).then(this.checkStatus)
    .then(response => {
      return response.json();
    }).then(data => {
      this.queryData = data;
      this.setState({isLoadingSearch: false});
    }).catch(e => {
      console.log(e);
      Alert.alert('Error', 'Server is offline');
    });
  }

  checkStatus(response: Response) {
    if (response.ok) {
      return response;
    } else {
      throw response;
    }
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
