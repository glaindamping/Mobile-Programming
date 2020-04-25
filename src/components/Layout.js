import React from 'react';
import {  View, Text, StyleSheet } from 'react-native';

const Layout = () => {
    return (
        <View style={style.container}>
            <View style={style.box1}></View>
            <View style={style.box2}></View>
            <View style={style.box3}></View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    box1: {
        width: 50,

        backgroundColor:'blue'

    },
    box2: {
        width: 50,

        backgroundColor: 'yellow'
    },
    box3: {
        width: 50,
     
        backgroundColor: 'red'
    },
    redTextStyle: {
        color: 'red'
    },
})

export default Layout;
