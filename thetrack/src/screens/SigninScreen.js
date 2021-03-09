import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from  '../components/NavLink'
import {Context} from '../context/AuthContext'
import {NavigationEvents} from 'react-navigation' // naviagtion events to clear errors msg


const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(Context)

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm
                headerText="Sign in to your Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin}
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