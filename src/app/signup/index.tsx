import { StyleSheet, View, Button } from "react-native";
import { navigation } from "../../utils/navigation";
import BaseScreen from "../../components/BaseScreen/BaseScreen";

export default function SignUp() {
  return (
    <>
      <BaseScreen />
      <View style={styles.container}>
        <Button title="Login" onPress={() => navigation("home")} />
        <Button title="SignUp" onPress={() => navigation("signup")} />
      </View>
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
