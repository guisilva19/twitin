import { router } from "expo-router";

const navigation = (path: string) => {
  router.navigate("/" + path);
};

export { navigation };
