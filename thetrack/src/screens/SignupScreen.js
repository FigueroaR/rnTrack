import React, { useContext } from 'react';
import { View, StyleSheet} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink'
import {NavigationEvents} from 'react-navigation' // naviagtion events to clear errors msg

// {we destruct our props}
const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
  
  
    return (
      <View style={styles.container}>
        <NavigationEvents onWillFocus={clearErrorMessage}/>
        <AuthForm
          headerText="Sign Up for Tracker"
          errorMessage={state.errorMessage}
          submitButtonText="Sign Up"
          onSubmit={signup}
        />
        <NavLink
          routeName="Signin"
          text="Already have an account? Sign In!"
        />
      </View>
    );
};


SignupScreen.navigationOptions = () => {
    return {
      headerShown: false, // we are hiding the header
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1, // this will make the view fit entire screen
        justifyContent: 'center', //vert center
        paddingBottom: 200
    }
})


export default SignupScreen;