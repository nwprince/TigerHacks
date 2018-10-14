/* tslint:disable */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Constants from './Constants';

interface ICardProps {
    imageUrl: string;
    title: string;
    body: string;
    pdf_link: string;
}

export class Card extends React.Component<ICardProps, {}>{
    render() {
        return (
            <View
                style={styles.cardStyle}
            >
                <Text>
                    <Image
                        style={{ width: 300, height: 300, resizeMode: 'cover' }}
                        source={{ uri: this.props.imageUrl }}
                    />
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardStyle: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        height: Constants.CardHeight,
        borderRadius: 4,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10
    }
});