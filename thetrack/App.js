import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'

import {Provider as AuthProvider} from  './src/context/authContext'

//switch nav lets us flow betwwen different screns quickly
const switchNavigator = createSwitchNavigator({
    // link to loginFlow
    loginFlow:  createStackNavigator({ // this will toggle between:
        Signup: SignupScreen,
        Signin: SigninScreen
    }),
    // botton nav will show in borrom of screen
    mainFlow: createBottomTabNavigator({
            // stack nav show on top part of device
        trackListFlow: createStackNavigator({ // this stack has its own sreens and flow
            TrackList: TrackListScreen,
            TrackDetail: TrackDetailScreen
        }),
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen
    })
})

//top level switch nav, fir show log in flow, then the main flow later on
const App = createAppContainer(switchNavigator)

// our own custom components
export default () => { // now our provider giver info to all our screens
   return(
    <AuthProvider>
        <App />
    </AuthProvider>
   ) 
}