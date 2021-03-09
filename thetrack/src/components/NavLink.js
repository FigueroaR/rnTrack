import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Spacer from './Spacer';
import {withNavigation} from 'react-navigation' //each screen with be render with navigation
// withNavigation always works

const NavLink = ({navigation, text, routeName}) => {
    //navigate function in in navigation

    return(
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
          <Spacer>
            <Text style={styles.link}>
              {text}
            </Text>
          </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link : {
        color: 'blue'
    }
})

export default withNavigation(NavLink)