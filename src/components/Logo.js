import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

export default function Logo() {

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.jpeg')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50

    },
    logo: {
        height: 200,
        width: '70%'
    }
});