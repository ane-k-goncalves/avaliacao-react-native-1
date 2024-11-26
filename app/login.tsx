import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import ImageButton from "../src/components/ImageButton";


export default function App() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (user === "fulano" && password === "123") {
      router.replace("/listagem");
    } else {
      console.log("Dados inválidos!");
    }
  };

  const placeholderImage = "https://fastly.picsum.photos/id/53/1280/1280.jpg?hmac=QP5opo-oENp5iFwsSiWH8azQuR0w0bwps6MT6yvhKwA"
  return (
    <SafeAreaView style={styles.container}>
       <Text style={styles.name}> PassengerHub </Text>
      <TextInput
        style={styles.input}
        onChangeText={setUser}
        value={user}
        placeholder="usuário"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="senha"
        secureTextEntry
      />
      <View style={styles.imageContainer}>
          <ImageButton text="Login" onPress={handleLogin} source={placeholderImage}/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 100,
    color: "#3652AD",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
     backgroundColor: "#D2E0FB"
  },
  input: {
    width: 300,
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "black",
    padding: 8,
    borderRadius: 10,
    margin: 10,
    width: 200,
    flex: 0,
    flexDirection: "row",
  },
  text: {
    color: "white",
    marginLeft: 75,
  },
  imageContainer: {
    margin: 10
  },
});
