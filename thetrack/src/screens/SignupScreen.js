import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native'
import TrackDetailScreen from './TrackDetailScreen';

// navigation is our in our porps
const SignupScreen = ({navigation}) => {
    return <> 
        <Text Style={{fontSize: 48}}>signup Screen</Text>
        <Button 
            title="Go to Sign In" 
            onPress={() => navigation.navigate('Signin')}/>

        <Button 
            title="Main Flow" 
            onPress={() => navigation.navigate('mainFlow')}/>
            
        </>
}

const styles = StyleSheet.create({

})


export default SignupScreen;