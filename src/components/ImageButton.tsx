import { StyleSheet, TouchableOpacity, Text, Pressable } from "react-native";
import { Image, type ImageSource } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

type Props = {
  source: string;
  onPress: () => void,
  text?: string;
};

export default function ImageButton({ source, onPress, text}: Props) {
  return (

    <Pressable onPress={onPress} style={styles.container}>
    
      <Image source={{ uri: source }}  style={styles.image} />
      {text && <Text style={styles.text}>{text}</Text>}
    </Pressable>

  )
}

const styles = StyleSheet.create({

  text: {
    position: "absolute",
    margin: 12,
    marginLeft: 75,
    alignItems: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)", 
  },
  image: {
    width: 200,
    height:50,
    borderRadius: 6,
  },
  container: {}
});
