/* tslint:disable */

import React from 'react';
import { View, FlatList, StatusBar, Text, Image } from 'react-native';
import { Card, CardItem } from 'native-base'
import Constants from './Constants';

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

    constructor(props: any) {
        super(props);
    }

    componentWillReceiveProps(props: IInfScrollerProps) {
        props.data.map(x => {
            console.log("Props: ", x.key);
        });
    }

    render() {
        return (
            <View
                style={{ flex: 1 }}
            >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.props.data}
                    renderItem={({ item }) =>
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
                            <CardItem cardBody={true}>
                                <Image
                                    source={{ uri: item.imageUrl }}
                                    style={{ height: 400, width: null, flex: 1 }}
                                />
                            </CardItem>
                            <CardItem>
                                <View
                                >
                                    <Text
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
                    }
                />
            </View>
        );
    }
}