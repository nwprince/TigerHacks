/* tslint:disable */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Constants from './Constants';
export class Card extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.cardStyle },
            React.createElement(Text, null,
                React.createElement(Image, { style: { width: 300, height: 300, resizeMode: 'cover' }, source: { uri: this.props.imageUrl } }))));
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
//# sourceMappingURL=Card.js.map