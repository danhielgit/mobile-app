import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SplashScreen() {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      checkUser();
    }, 2000);
  }, []);

  const checkUser = async () => {
    const user = await AsyncStorage.getItem("user");

    if (user) {
      router.replace("/home");
    } else {
      router.replace("/login");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>NovaBank</Text>
      <Text style={styles.subtitle}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold"
  },
  subtitle: {
    color: "#CBD5E1",
    marginTop: 10
  }
});
