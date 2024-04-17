import { StyleSheet, View, Button } from "react-native";
import BaseScreen from "../../../components/BaseScreen/BaseScreen";
import { navigation } from "../../../utils/navigation";

export default function Profile() {
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
