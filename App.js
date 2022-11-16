import { View, Text } from "react-native";
import RootNavigation from "./navigation";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
