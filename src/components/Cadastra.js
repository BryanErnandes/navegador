import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'

export default function Cadastro() {

   const navigation = useNavigation()


    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.texto}>Cadastro</Text>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.imput} placeholder="Nome" />
                <TextInput style={styles.imput} placeholder="Email" />
                <TextInput style={styles.imput} placeholder="Senha" keyboardType="numeric" />
            </View>
            <View style={styles.botao}>
                <TouchableOpacity style={styles.buttom} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.tButtom}>Cadastra</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttom1} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.tButtom1}>Volta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titulo: {
        alignItems: 'center'
    },
    texto: {
        paddingTop: 10,
        fontSize: 50,
        fontWeight: 'bold',
    },
    form: {
        alignItems: 'center'
    },
    imput: {
        width: '89%',
        marginTop: 20,
        padding: 10,
        fontSize: 20,
        backgroundColor:"#FFFFFF",
        borderColor: '#FFFFF',
        color: '#FFFFF',
        borderWidth: 1,
        borderRadius: 5,
        fontWeight: 'bold',

    },
    botao: {
        alignItems: 'center'
    },
    buttom: {
        marginTop: 20,
        backgroundColor: '#E0FF1D',
        height: 40,
        width: '89%',
        borderRadius: 9
    },
    tButtom: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5,
        fontSize: 19
    },
    tSenha: {
        fontSize: 18,
        color: '#FFFFF',
        fontWeight: 'bold',
        marginTop: 18,
    },
    tSenha1: {
        fontSize: 18,
        color: '#0C01E0',
        fontWeight: 'bold',
        marginTop: 20,
        padding: 5
    },
    buttom1: {
        marginTop: 7,
        backgroundColor: '#0784DE',
        height: 45,
        width: '89%',
        borderRadius: 9
    },
    tButtom1: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 9,
        fontSize: 19
    }
});