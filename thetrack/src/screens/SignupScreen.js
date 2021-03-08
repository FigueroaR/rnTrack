import React, {useState, useContext } from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import { Text, Input, Button} from 'react-native-elements' // pre styled components
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/authContext'

import AuthForm from '../components/AuthForm'


// navigation is our in our porps
const SignupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext)

    

    //console.log(state)


    return (
    <View style={styles.container}> 
        <AuthForm
            headerText="Sign Up for Tracker"
            errorMessage={state.errorMessage}
            onSubmit={signup}
            submitButtonText="Sign Up" />
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Spacer>
                <Text style={styles.link}>Sign In</Text>
            </Spacer>
        </TouchableOpacity>
        
    </View>)
}

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false, // we are hiding the header
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1, // this will make the view fir entire screen
        justifyContent: 'center', //vert center
        paddingBottom: 200
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    link : {
        color: 'blue'
    }
})


export default SignupScreen;