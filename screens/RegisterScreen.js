import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import LoginInput from '../components/LoginInput';
import firebase from 'firebase';
import * as FirebaseAPI from '../modules/firebaseAPI';

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

    componentDidMount(){
        this.watchAuthState(this.props.navigation);
    }

    watchAuthState(navigation){
        firebase.auth().onAuthStateChanged(function(user){
            console.log('onAuthStateChanged: ', user);
            if(user){
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
                <Text style={styles.headerText}>Register</Text>
                <LoginInput text="Email" onInputTextChange={this.onEmailTextChange} />
                <LoginInput text="Password" onInputTextChange={this.onPasswordTextChange} />
                <LoginInput text="Confirm Password" onInputTextChange={this.onConfirmPasswordTextChange} />
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
        console.log('Register');
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.confirmPassword);
        FirebaseAPI.createUser(this.state.email, this.state.password);
        /******Insert Logic for Password Length, and to verify password=confirm password before accessing Firebase *******/
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
