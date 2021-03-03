import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native'


const TrackListScreen = ({navigation}) => {
    return <>
        <Text Style={{fontSize: 48}}>track list Screen</Text>
        <Button 
            title="Go to track detail"
             onPress={() => navigation.navigate('TrackDetail')} />
    </>
}

const styles = StyleSheet.create({

})


export default TrackListScreen;