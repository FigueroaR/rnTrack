import React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from  '../components/NavLink'

const SigninScreen = () => {
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign in to your Tracker"
                errorMessage=""
                submitButtonText="Sign In"
                onSubmit={() => {}}
            />
            <NavLink
                routeName="Signup"
                text="Need an account? Sign Up!"
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };



const styles = StyleSheet.create({
    container: {
        flex: 1, // this will make the view fit entire screen
        justifyContent: 'center', //vert center
        paddingBottom: 200
    }
})


export default SigninScreen;