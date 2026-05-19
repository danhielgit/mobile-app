import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {

    if (!email || !password) {
      alert("Complete all fields");
      return;
    }

    const storedUser = await AsyncStorage.getItem("user");

    if (!storedUser) {
      alert("No account found");
      return;
    }

    const user = JSON.parse(storedUser);

    if (email === user.email && password === user.password) {
      router.replace("/home" as any);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.bankName}>
          NovaBank
        </Text>

        <Text style={styles.subtitle}>
          Secure Mobile Banking
        </Text>
      </View>

      {/* CARD */}
      <View style={styles.card}>

        <Text style={styles.title}>
          Welcome Back
        </Text>

        {/* EMAIL */}
        <Text style={styles.label}>
          Email
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#94A3B8"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        {/* PASSWORD */}
        <Text style={styles.label}>
          Password
        </Text>

        <View style={{ position: "relative" }}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#94A3B8"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: 15,
              top: 14,
            }}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={26}
              color="#94A3B8"
            />
          </TouchableOpacity>
        </View>

        {/* LOGIN BUTTON */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>
            Login
          </Text>
        </TouchableOpacity>

        {/* GO TO REGISTER */}
        <TouchableOpacity
          onPress={() => router.replace("/register")}
        >
          <Text style={styles.registerText}>
            I don't have an account
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },

  header: {
    paddingHorizontal: 30,
    marginTop: 80,
    marginBottom: 40,
  },

  bankName: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#CBD5E1',
    marginTop: 10,
    fontSize: 16,
  },

  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 35,
  },

  label: {
    color: '#334155',
    fontSize: 15,
    marginBottom: 10,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#F1F5F9',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 22,
    color: '#0F172A',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  loginButton: {
    backgroundColor: '#0F172A',
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
    elevation: 5,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  registerText: {
    textAlign: 'center',
    marginTop: 28,
    color: '#2563EB',
    fontSize: 15,
    fontWeight: '600',
  },

});
