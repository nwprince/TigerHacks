/* tslint:disable */
import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { Card, CardItem } from 'native-base';
export class InfScroller extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(props) {
        props.data.map(x => {
            console.log("Props: ", x.key);
        });
    }
    render() {
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(FlatList, { showsVerticalScrollIndicator: false, data: this.props.data, renderItem: ({ item }) => React.createElement(Card, { key: item.key, style: {
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
                    React.createElement(CardItem, { cardBody: true },
                        React.createElement(Image, { source: { uri: item.imageUrl }, style: { height: 400, width: null, flex: 1 } })),
                    React.createElement(CardItem, null,
                        React.createElement(View, null,
                            React.createElement(Text, { style: {
                                    margin: 5,
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                    textAlign: 'center'
                                } }, item.title),
                            React.createElement(Text, { style: {
                                    fontSize: 15
                                } }, item.body)))) })));
    }
}
//# sourceMappingURL=InfScroller.js.map