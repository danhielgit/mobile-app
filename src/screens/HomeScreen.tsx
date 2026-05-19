import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function HomeScreen() {

  const router = useRouter();

  const handlePress = (action: string) => {
    console.log(action);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    router.replace("/");
  };

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Hello!</Text>
        <Text style={styles.subtitle}>Welcome back</Text>
      </View>

      {/* CARD SALDO */}
      <View style={styles.card}>
        <Text style={styles.account}>Main Account •••• 1234</Text>

        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balance}>$ 25,680.50</Text>

        {/* BOTONES */}
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => handlePress("Deposit")}>
            <Ionicons name="download-outline" size={24} />
            <Text style={styles.actionText}>Deposit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress("Transfer")}>
            <Ionicons name="swap-horizontal-outline" size={24} />
            <Text style={styles.actionText}>Transfer</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress("Pay")}>
            <Ionicons name="document-text-outline" size={24} />
            <Text style={styles.actionText}>Pay</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress("More")}>
            <Ionicons name="ellipsis-horizontal" size={24} />
            <Text style={styles.actionText}>More</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* QUICK ACTIONS */}
      <Text style={styles.section}>Quick actions</Text>

      <View style={styles.quickActions}>
        {["Recharge", "Services", "Cards", "Investments"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.quickCard}
            onPress={() => handlePress(item)}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* CUENTAS */}
      <Text style={styles.section}>My Accounts</Text>

      <View style={styles.listItem}>
        <Text>Savings Account •••• 5678</Text>
        <Text>$ 8,430.20</Text>
      </View>

      <View style={styles.listItem}>
        <Text>Checking Account •••• 9012</Text>
        <Text>$ 15,250.35</Text>
      </View>

      {/* MOVIMIENTOS */}
      <Text style={styles.section}>Recent Transactions</Text>

      <View style={styles.listItem}>
        <Text>Supermarket</Text>
        <Text>- $125.80</Text>
      </View>

      <View style={styles.listItem}>
        <Text>Transfer</Text>
        <Text>- $500.00</Text>
      </View>

      <View style={styles.listItem}>
        <Text>Salary</Text>
        <Text>+ $2,800.00</Text>
      </View>

      {/* LOGOUT */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20
  },

  header: {
    marginBottom: 20
  },

  welcome: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "bold"
  },

  subtitle: {
    color: "#CAD5E1"
  },

  card: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20
  },

  account: {
    fontWeight: "bold",
    marginBottom: 10
  },

  balanceLabel: {
    color: "#555"
  },

  balance: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 10
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },

  actionText: {
    textAlign: "center"
  },

  section: {
    color: "#FFF",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10
  },

  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },

  quickCard: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 12,
    width: "23%",
    alignItems: "center"
  },

  listItem: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  logoutButton: {
    backgroundColor: "#EF4444",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40
  },

  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }

});
``