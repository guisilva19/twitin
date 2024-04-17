import { Tabs } from "expo-router";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return <Feather name="home" size={size} color={color} />;
              }
              return <Feather name="home" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="deposits"
          options={{
            title: "Deposits",
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return <AntDesign name="barschart" size={size} color={color} />;
              }
              return <AntDesign name="barschart" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="distributions"
          options={{
            title: "Distributions",
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return <AntDesign name="linechart" size={size} color={color} />;
              }
              return <AntDesign name="linechart" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="documents"
          options={{
            title: "Documents",
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return (
                  <Ionicons
                    name="documents-outline"
                    size={size}
                    color={color}
                  />
                );
              }
              return (
                <Ionicons name="documents-outline" size={size} color={color} />
              );
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return <AntDesign name="user" size={size} color={color} />;
              }
              return <AntDesign name="user" size={size} color={color} />;
            },
          }}
        />
      </Tabs>
    </>
  );
}
