import React from 'react';
import {View, StyleSheet} from 'react-native'
import { Text, Input, Button} from 'react-native-elements' // pre styled components
import Spacer from '../components/Spacer'


// navigation is our in our porps
const SignupScreen = ({navigation}) => {
    return (<> 
        <Spacer><Text h3>Sign Up for tracker</Text></Spacer>
        <Input label="Email" />
        <Spacer />
        <Input label="Password" />
        <Spacer><Button title="Sign Up"/></Spacer>
        
        </>)
}

const styles = StyleSheet.create({

})


export default SignupScreen;