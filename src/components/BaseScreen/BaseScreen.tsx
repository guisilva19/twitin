import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export default function BaseScreen() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ backgroundColor: "#FFF" }} />
    </>
  );
}
