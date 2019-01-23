import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native';
export default class LoginInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.labelText}>{this.props.text}</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.props.onInputTextChange(text)}
                    
                    placeholder={this.props.text}
                />
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#aaf',
        marginVertical: 10,
    },
    labelText: {
        fontSize: 18,
        color: 'rgba(0,0,0, 1)',
        textAlign: 'left',
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    }
});