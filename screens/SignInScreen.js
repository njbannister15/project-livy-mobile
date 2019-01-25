import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import LoginInput from '../components/LoginInput';

export default class SignInScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <View 
            
            style={styles.container}>
                <Text 
                onLongPress={this.goToDemo}
                style={styles.headerText}>Login</Text>
                <LoginInput text="Email" />
                <LoginInput text="Password" />
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
            </View>
        )
    }

    goToDemo = () =>{
        console.log("Go To Demo Area")
        this.props.navigation.navigate('Demo');
    }
    

    onPressLogin = () => {
        console.log('Login')
    }

    onPressGoToRegisterScreen = () => {
        this.props.navigation.navigate('Register');
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
