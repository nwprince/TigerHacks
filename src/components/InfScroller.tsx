/* tslint:disable */

import React from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import { Card } from './Card';

interface IInfScrollerProps {
    data: any[];
}

export class InfScroller extends React.Component<IInfScrollerProps, {}> {
    render() {
        return (
            <View
                style={{ flex: 1, marginTop: StatusBar.currentHeight + 56 }}
            >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.props.data}
                    renderItem={({ item }) =>
                        <Card
                            imageUrl={item.imageUrl}
                            body={item.body}
                            pdf_link={item.pdf_link}
                            title={item.title}
                        />
                    }
                />
            </View>
        );
    }
}