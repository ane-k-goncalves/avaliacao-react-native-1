import { View, Text, SafeAreaView, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router, useRouter } from 'expo-router'
import ImageButton from '../src/components/ImageButton';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const  goToLogin = () => {
      router.push('/login'); 
    }
    return (
    <SafeAreaView style={styles.container}>
        <StatusBar />
       <Text style={styles.welcome}> Bem vindo</Text>
       <Text style={styles.name}> PassengerHub </Text>
       <TouchableOpacity style={styles.button} onPress={goToLogin} >
          <Text style={styles.nameButton}>Login</Text>
        </TouchableOpacity>
    </SafeAreaView>
)}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#D2E0FB"
  },
  welcome: {
    fontSize:20
  },
  name: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "#3652AD",
    margin: 60
  },
  button: {
    backgroundColor: "black",
    padding: 8,
    borderRadius: 10,
    margin: 10,
    width: 200,
    height: 50,
    flex: 0,
    flexDirection: 'row',
  },
  nameButton: {
    color: "white",
    marginLeft: 70,
    marginTop: 8,
    fontSize: 16
  }
});