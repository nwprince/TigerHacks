/* tslint: disable */
import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Input, Icon, Item } from 'native-base';
export default class AppBar extends React.Component {
    constructor() {
        super(...arguments);
        this.handleInput = (text) => {
            this.setState({ search: text });
        };
        this.handleEnter = (e) => {
            e = e;
            console.log(this.state.search);
            this.props.callback(this.state.search);
        };
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(View, { style: styles.statusBar }),
            React.createElement(View, { style: styles.appBar },
                React.createElement(Item, { style: { marginLeft: 10 } },
                    React.createElement(Icon, { active: true, name: 'search' }),
                    React.createElement(Input, { placeholder: 'Search for an article', onChangeText: this.handleInput, onSubmitEditing: this.handleEnter })))));
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: StatusBar.currentHeight + 56,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    statusBar: {
        height: StatusBar.currentHeight
    },
    appBar: {
        flexDirection: 'row',
        flex: 1,
        margin: 6,
        marginLeft: 20, marginRight: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2
    },
    text: {
        fontSize: 24
    },
    icon: {
        margin: 12
    }
});
//# sourceMappingURL=AppBar.js.map