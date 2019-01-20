import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import LoginInput from '../components/LoginInput';

export default class RegisterScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Register</Text>
                <LoginInput text="Email" />
                <LoginInput text="Password" />
                <LoginInput text="Confirm Password" />
                <Button
                    onPress={this.onPressRegister}
                    title="Register"
                    color="#77f"
                />
                <View style={styles.row}>
                    <Text>Already have an account?</Text>
                    <Button
                        onPress={this.onPressGoToLoginScreen}
                        title="Login"
                        color="#77f"
                    />
                </View>



            </View>
        )
    }

    onPressRegister = () => {
        console.log('Register')
    }

    onPressGoToLoginScreen = () => {
        this.props.navigation.navigate('SignIn');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faa',
        marginVertical: 200,
        marginHorizontal: 24
    },
    headerText: {
        fontSize: 24,
        color: 'rgba(0,0,0, 1)',
        textAlign: 'left',
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
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#aea',

    }
});
