import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Alert,
    KeyboardAvoidingView
} from 'react-native';
import { Constants } from 'expo';
import LoginInput from '../../components/LoginInput';
import firebase from 'firebase';
import * as FirebaseAPI from '../../modules/firebaseAPI';

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.unsubscriber = null;
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    componentDidMount() {
        this.watchAuthState(this.props.navigation);
    }

    watchAuthState(navigation) {
        firebase.auth().onAuthStateChanged(function (user) {
            console.log('onAuthStateChanged: ', user);
            if (user) {
                navigation.navigate('Main');
            }
        });
    }

    render() {
        return (

            <View
                style={styles.container}
                behavior="padding"
                enabled
            >
                <View style={styles.spacer}></View>
                <KeyboardAvoidingView behavior="padding" style={styles.form}>
                    <Text style={styles.headerText}>Register</Text>
                    <LoginInput secureTextEntry={false} text="Email" onInputTextChange={this.onEmailTextChange} />
                    <LoginInput secureTextEntry={true} text="Password" onInputTextChange={this.onPasswordTextChange} />
                    <LoginInput secureTextEntry={true} text="Confirm Password" onInputTextChange={this.onConfirmPasswordTextChange} />
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
                </KeyboardAvoidingView>
                <View style={styles.spacer}></View>
            </View>
        )
    }

    onEmailTextChange = (text) => {
        this.setState({
            email: text
        });
    }

    onPasswordTextChange = (text) => {
        this.setState({
            password: text
        });
    }

    onConfirmPasswordTextChange = (text) => {
        this.setState({
            confirmPassword: text
        });
    }

    onPressRegister = () => {
        if (this.state.password !== this.state.confirmPassword) {
            Alert.alert(
                'Password Error',
                'Passwords must match',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
            return;
        }
        FirebaseAPI.createUser(this.state.email, this.state.password);
    }

    onPressGoToLoginScreen = () => {
        this.props.navigation.navigate('SignIn');
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
    },
    spacer: {
        paddingTop: 50 + Constants.statusBarHeight,
        padding: 50,
        backgroundColor: '#ffffff',
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

    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
    },
});
