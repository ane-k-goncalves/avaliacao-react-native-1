import { View, Text, Button, SectionList, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { grupoPais } from "../src/helpers/data";
import data from "./../src/services/data-passengers";

export default function listagem() {
  const categoria = grupoPais(data);

  const Separator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <SectionList
        sections={categoria}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderSectionHeader={({ section: { title } }) => (
          <>
            <Separator /><Text style={styles.sectionHeader}>{title}</Text>
          </>
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            
            <Text>{item.passenger_name}</Text>
          </View>
        )}
        contentContainerStyle={styles.section}
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  section: {
    width: 200,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D2E0FB",
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  item: {
    margin: 4,
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
