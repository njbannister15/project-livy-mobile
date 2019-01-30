import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    KeyboardAvoidingView
} from 'react-native';
import { Constants } from 'expo';
import LoginInput from '../../components/LoginInput';
import firebase from 'firebase';
import * as FirebaseAPI from '../../modules/firebaseAPI';

export default class SignInScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.unsubscriber = null;
        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount() {
        this.watchAuthState(this.props.navigation);
    }
    //Watch Login State 
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
                behavior="padding"
                enabled
                style={styles.container}>
                <View style={styles.spacer}></View>
                <KeyboardAvoidingView behavior="padding" style={styles.form}>

                    <Text
                        onLongPress={this.goToDemo}
                        style={styles.headerText}>Login</Text>
                    <LoginInput secureTextEntry={false} text="Email" onInputTextChange={this.onEmailTextChange} />
                    <LoginInput secureTextEntry={true} text="Password" onInputTextChange={this.onPasswordTextChange} />
                    <Button
                        onPress={this.onPressLogin}
                        title="Login"
                        color="#77f"
                    />
                    <View style={styles.row}>
                        <Text>New to Project Livy?</Text>
                        <Button
                            onPress={this.onPressGoToRegisterScreen}
                            title="Register"
                            color="#77f"
                        />
                    </View>
                </KeyboardAvoidingView>
                <View style={styles.spacer}></View>
            </View>
        )
    }

    goToDemo = () => {
        console.log("Go To Demo Area")
        this.props.navigation.navigate('Demo');
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

    onPressLogin = () => {
        console.log('Login');
        FirebaseAPI.signInUser(this.state.email, this.state.password);

    }

    onPressGoToRegisterScreen = () => {
        this.props.navigation.navigate('Register');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
    },
    spacer: {
        paddingTop: 40 + Constants.statusBarHeight,
        padding: 40,
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
