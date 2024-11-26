import { Stack } from "expo-router";
import Menu from "../src/components/Menu";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function _layout() {
  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen
          name="login"
          options={{
            headerTitle: "",
            headerStyle: { backgroundColor: "#D2E0FB" },
          }}
        />
        <Stack.Screen
          name="listagem"
          options={{
            headerTitle: "Listagem",
            headerRight: () => <Menu />,
            headerLeft: () => false,
            headerStyle: { backgroundColor: "#3652AD" },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="sobre"
          options={{
            headerTitle: "Sobre",
            headerRight: () => <Menu />,
            headerLeft: () => false,
            headerStyle: { backgroundColor: "#3652AD" },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "",
            headerStyle: { backgroundColor: "#D2E0FB" },
          }}
        />
      </Stack>
    </ActionSheetProvider>
  );
}
