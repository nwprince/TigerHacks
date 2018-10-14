/* tslint:disable */
import React from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import { Card } from './Card';
export class InfScroller extends React.Component {
    render() {
        return (React.createElement(View, { style: { flex: 1, marginTop: StatusBar.currentHeight + 56 } },
            React.createElement(FlatList, { showsVerticalScrollIndicator: false, data: this.props.data, renderItem: ({ item }) => React.createElement(Card, { imageUrl: item.imageUrl, body: item.body, pdf_link: item.pdf_link, title: item.title }) })));
    }
}
//# sourceMappingURL=InfScroller.js.map