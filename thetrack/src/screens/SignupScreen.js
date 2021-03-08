// import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

// {we destruct our props}
const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in instead
          </Text>
        </Spacer>
      </TouchableOpacity>
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
    },
    link : {
        color: 'blue'
    }
})


export default SignupScreen;