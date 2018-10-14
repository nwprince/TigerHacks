import React from 'react';
import AppBar from './components/AppBar';

import { ActivityIndicator, View, Alert, StyleSheet } from 'react-native';
import Constants from './components/Constants';
import { InfScroller, ICardProps } from './components/InfScroller';

interface IAppState {
  isLoadingSearch: boolean;
  isLoadingImages: boolean;
}

export default class App extends React.Component<{}, IAppState> {
  private queryData: any;
  private image: any;
  private cardData: ICardProps[] = [];

  constructor(props: any) {
    super(props);
    this.resetQueue();
    this.state = {
      isLoadingSearch: true,
      isLoadingImages: false
    };

    this.fetchInitial(Constants.InitialTopics);
    this.fetchImageFromKeyword('boat');
  }

  resetQueue = () => {
    this.cardData = [];
    this.image = undefined;
  }

  handleSearchPress = (text: string) => {
    text = text;
    console.log('success');
    this.setState({ isLoadingSearch: true, isLoadingImages: true });
    this.fetchFromQuery(text);
    this.fetchImageFromKeyword(text);
  }

  fetchFromQuery(query: string) {
    this.resetQueue();
    fetch(Constants.AppUrl + '?' + query + '=10').then(this.checkStatus).then(response => {
      return response.json();
    }).then(response => {
      this.queryData = response;
      this.setState({ isLoadingSearch: false });
    }).catch(e => {
      console.log(e);
      Alert.alert('Error', 'Server is offline');
    });
  }

  fetchInitial(topics: string[]) {
    let queryString: string = '';

    queryString += Constants.AppUrl + '?';
    for (let index = 0; index < topics.length; index++) {
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
        this.setState({ isLoadingSearch: false });
      }).catch(e => {
        console.log(e);
        Alert.alert('Error', 'Server is offline');
      });
  }

  fetchImageFromKeyword(keyword: string) {
    fetch('https://api.unsplash.com/photos/random?client_id=' + Constants.UnsplashKey + '&' + 'page=1&query=' + keyword)
      .then(this.checkStatus)
      .then(response => {
        return response.json();
      }).then(data => {
        this.image = data.urls.regular;
        this.setState({ isLoadingImages: false });
      }).catch(e => {
        console.log(e);
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
    let scrollable: any = undefined;

    if (this.state.isLoadingSearch || this.state.isLoadingImages) {
      ActivityElement = <ActivityIndicator size='large' />;
    } else {
      for (let i: number = 0; i < this.queryData.length; i++) {
        for (let j: number = 0; j < this.queryData[i].length; j++) {
          const newCard: ICardProps = {
            body: this.queryData[i][j][2],
            title: this.queryData[i][j][1],
            pdf_link: this.queryData[i][j][0],
            imageUrl: this.image,
            key: this.queryData[i][j][1]
          };

          this.cardData.push(newCard);
        }
      }

      scrollable = <View
        style={style.scroller}
      >
        <InfScroller
          data={this.cardData}
        />
      </View>;
    }

    return (
      <View
        style={style.main}
      >
        {scrollable}
        <View
          style={style.overlay}
        >
          <AppBar callback={this.handleSearchPress} />
          {ActivityElement}
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0
  },
  scroller: {
    flex: 1
  },
  main: {
    backgroundColor: '#4e4e3e',
    flex: 1
  }
});