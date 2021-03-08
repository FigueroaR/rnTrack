import React, {useState, useContext } from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import { Text, Input, Button} from 'react-native-elements' // pre styled components
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/authContext'


// navigation is our in our porps
const SignupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(state)


    return (<View style={styles.container}> 
        <Spacer><Text h3>Sign Up for tracker</Text></Spacer>
        <Input 
            label="Email" 
            value={email} 
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            />
            
        <Spacer />
        <Input 
            label="Password" 
            value={password} 
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry // hides our text
            />
        {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
        <Spacer>
            <Button title="Sign Up" onPress={ () => signup({email, password})} />
        </Spacer>
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