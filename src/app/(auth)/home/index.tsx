import { View, Text, StyleSheet, Button } from "react-native";
import { navigation } from "../../../utils/navigation";
import BaseScreen from "../../../components/BaseScreen/BaseScreen";

export default function Home() {
  return (
    <>
      <BaseScreen />
      <View style={styles.container}>
        <Text>Home</Text>
        <Button title="Back" onPress={() => navigation("")} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
