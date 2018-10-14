/* tslint:disable */

import React from 'react';
import { View, FlatList, Text, Image, Linking } from 'react-native';
import { Card, CardItem } from 'native-base';

export interface ICardProps {
    imageUrl: string;
    title: string;
    body: string;
    pdf_link: string;
    key: string;
}

interface IInfScrollerProps {
    data: ICardProps[];
}

export class InfScroller extends React.Component<IInfScrollerProps, {}> {

    // private cardData: any;

    constructor(props: any) {
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

        return (
            <View
                style={{ flex: 1 }}
            >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.props.data}
                    renderItem={({ item }) => {

                        if (item.key == 'BLANK') {
                            return (
                                <View
                                    style={{
                                        height: 100
                                    }}
                                />
                            );
                        }

                        return (
                            <Card
                                key={item.key}
                                style={
                                    {
                                        height: 'auto',
                                        margin: 10,
                                        marginLeft: 10,
                                        marginRight: 10,
                                        marginBottom: 20,
                                        elevation: 8,
                                        borderRadius: 4,
                                        borderWidth: 2,
                                        overflow: 'hidden'
                                    }
                                }

                            >
                                <CardItem
                                    onPress={() => { alert('aaaaa'); }}
                                    cardBody={true}
                                >
                                    <Image
                                        source={{ uri: item.imageUrl }}
                                        style={{ height: 400, width: null, flex: 1 }}
                                    />
                                </CardItem>
                                <CardItem>
                                    <View
                                    >
                                        <Text
                                            onPress={() => { Linking.openURL(item.pdf_link); }}
                                            style={{
                                                margin: 5,
                                                fontWeight: 'bold',
                                                fontSize: 18,
                                                textAlign: 'center'
                                            }}
                                        >
                                            {item.title}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 15
                                            }}
                                        >
                                            {item.body}
                                        </Text>
                                    </View>
                                </CardItem>
                            </Card>
                        );
                    }

                    }
                />
            </View>
        );
    }
}