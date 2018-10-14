/* tslint:disable */
import React from 'react';
import { View, FlatList, Text, Image, Linking } from 'react-native';
import { Card, CardItem } from 'native-base';
export class InfScroller extends React.Component {
    // private cardData: any;
    constructor(props) {
        super(props);
        // this.cardData = [];
    }
    /* private shuffleCards = () => {
        for (var i = this.props.data.length - 1; i >= 1; i--) {

            this.cardData = this.props.data;

            var randomIndex = Math.floor(Math.random() * (i + 1));
            var itemAtIndex = this.cardData[randomIndex];

            this.cardData[randomIndex] = this.props.data[i];
            this.cardData[i] = itemAtIndex;
        }
        this.cardData.splice(0, 0, { key: 'BLANK', pdf_link: '', body: '', imageUrl: '', title: '' });
    } */
    render() {
        // this.shuffleCards();
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(FlatList, { showsVerticalScrollIndicator: false, data: this.props.data, renderItem: ({ item }) => {
                    if (item.key == 'BLANK') {
                        return (React.createElement(View, { style: {
                                height: 100
                            } }));
                    }
                    return (React.createElement(Card, { key: item.key, style: {
                            height: 'auto',
                            margin: 10,
                            marginLeft: 10,
                            marginRight: 10,
                            marginBottom: 20,
                            elevation: 8,
                            borderRadius: 4,
                            borderWidth: 2,
                            overflow: 'hidden'
                        } },
                        React.createElement(CardItem, { onPress: () => { alert('aaaaa'); }, cardBody: true },
                            React.createElement(Image, { source: { uri: item.imageUrl }, style: { height: 400, width: null, flex: 1 } })),
                        React.createElement(CardItem, null,
                            React.createElement(View, null,
                                React.createElement(Text, { onPress: () => { Linking.openURL(item.pdf_link); }, style: {
                                        margin: 5,
                                        fontWeight: 'bold',
                                        fontSize: 18,
                                        textAlign: 'center'
                                    } }, item.title),
                                React.createElement(Text, { style: {
                                        fontSize: 15
                                    } }, item.body)))));
                } })));
    }
}
//# sourceMappingURL=InfScroller.js.map