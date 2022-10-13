import React from "react";
import { StyleSheet, View, Text } from "react-native";
//import { useNavigation } from "@react-navigation/native";

export default function Principal() {

    //const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.texto}>Principal</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center'

    },
    texto: {
        fontSize: 70
    }
});




















































































































