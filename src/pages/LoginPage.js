
import React from "react";
import{ SafeAreaView, StyleSheet, } from 'react-native';
import Logo from '../components/Logo';
import Login from '../components/Login';

export default function LoginPage(){


    return(
        <SafeAreaView style={styles.container}>
            <Logo />
            <Login />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});