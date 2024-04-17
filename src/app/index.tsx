import { StyleSheet, View, Button } from "react-native";
import { navigation } from "../utils/navigation";
import BaseScreen from "../components/BaseScreen/BaseScreen";
import { StatusBar } from "expo-status-bar";

export default function Login() {
  return (
    <>
      <BaseScreen />
      <View style={styles.container}>
        <Button title="Login" onPress={() => navigation("home")} />
        <Button title="SignUp" onPress={() => navigation("signup")} />
      </View>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
