import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function sobre() {
    const linkGithub = () => {
        Linking.openURL("https://github.com/ane-k-goncalves")
    }
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar />
            <View style={styles.view}>
            <Text style={styles.title}>Version 1.0</Text>
            <Text> Projeto desenvolvido por Ane Karine Gonçalves</Text>
            </View>
            
            <Text>Visite meu GitHub</Text>
            <TouchableOpacity  style={styles.button} onPress={linkGithub}>
                 <FontAwesome name="github" size={24} color="white" /> 
                <Text style={styles.textButton}> GitHub</Text>
            </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
         backgroundColor: "#D2E0FB",
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 5
    },
    button: {
        backgroundColor: "black",
        padding: 8,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 200,
        width: 100,
        flex: 0,
        flexDirection: 'row',
    },
    textButton: {
        color: "white", 
        marginStart: 4,
        marginTop: 4
    }
})
