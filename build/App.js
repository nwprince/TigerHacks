import React from 'react';
import AppBar from './components/AppBar';
import { ActivityIndicator, View, Alert, StyleSheet } from 'react-native';
import Constants from './components/Constants';
import { InfScroller } from './components/InfScroller';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchPress = (text) => {
            text = text;
            console.log('success');
            this.setState({ isLoadingSearch: true });
            this.fetchFromQuery(text);
        };
        this.state = {
            isLoadingSearch: true
        };
        this.fetchInitial(Constants.InitialTopics);
    }
    fetchFromQuery(query) {
        fetch(Constants.AppUrl + '?' + query + '=10').then(response => {
            return response.json();
        }).then(this.checkStatus).then(response => {
            this.queryData = response;
            this.setState({ isLoadingSearch: false });
        }).catch(e => {
            console.log(e);
            Alert.alert('Error', 'Server is offline');
        });
    }
    fetchInitial(topics) {
        let queryString = undefined;
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
            this.setState({ isLoadingSearch: false });
        }).catch(e => {
            console.log(e);
            Alert.alert('Error', 'Server is offline');
        });
    }
    checkStatus(response) {
        if (response.ok) {
            return response;
        }
        else {
            throw response;
        }
    }
    render() {
        let ActivityElement = undefined;
        if (this.state.isLoadingSearch === true) {
            ActivityElement = React.createElement(ActivityIndicator, { size: 'large' });
        }
        console.log(this.queryData);
        return (React.createElement(View, null,
            React.createElement(View, { style: {} },
                React.createElement(InfScroller, { data: [{
                            key: '1',
                            imageUrl: 'https://i.redd.it/m8b8azv2axr11.jpg',
                            title: 'Dick sniffles',
                            body: 'My dick is sniffling',
                            pdf_link: 'http://bing.com/'
                        }] })),
            React.createElement(View, { style: style.overlay },
                React.createElement(AppBar, { callback: this.handleSearchPress }),
                ActivityElement)));
    }
}
let style = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0
    },
    scroller: {
        flex: 1
    }
});
//# sourceMappingURL=App.js.map