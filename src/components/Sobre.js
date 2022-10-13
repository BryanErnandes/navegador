import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Ionicons from '@expo/vector-icons/AntDesign';


export default function Pagina2() {

   // const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Sobre</Text>

            <Ionicons name="rightcircle" size={32} color="green" />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center'

    },
    texto: {
        fontSize: 70
    },
    te: {
        fontSize: 70
    }
});