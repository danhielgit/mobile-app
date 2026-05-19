import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView
} from 'react-native';

import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = () => {

  const router = useRouter();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {

    if (!firstname || !lastname || !email || !password) {
      alert("Please complete all required fields");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const userData = { email, password };
    await AsyncStorage.setItem("user", JSON.stringify(userData));

    alert("Account created successfully ✅");
    router.replace("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <ScrollView keyboardShouldPersistTaps="handled">

        <View style={styles.header}>
          <Text style={styles.bankName}>NovaBank</Text>
          <Text style={styles.subtitle}>Create your account</Text>
        </View>

        <View style={styles.card}>

          <Text style={styles.title}>Register</Text>

          {/* FIRSTNAME */}
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your first name"
            value={firstname}
            onChangeText={setFirstname}
          />

          {/* LASTNAME */}
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your last name"
            value={lastname}
            onChangeText={setLastname}
          />

          {/* PHONE */}
          <Text style={styles.label}>Mobile Phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          {/* ADDRESS */}
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your address"
            value={address}
            onChangeText={setAddress}
          />

          {/* COUNTRY */}
          <Text style={styles.label}>Country</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your country"
            value={country}
            onChangeText={setCountry}
          />

          {/* EMAIL */}
          <Text style={styles.label}>Email</Text>
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
          <Text style={styles.label}>Password</Text>

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
                top: 10,
              }}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={26}
                color="#94A3B8"
              />
            </TouchableOpacity>
          </View>

          {/* BUTTON */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleRegister}
          >
            <Text style={styles.loginButtonText}>
              Sign Up
            </Text>
          </TouchableOpacity>

          {/* VOLVER A LOGIN */}
          <TouchableOpacity onPress={() => router.replace("/")}>
            <Text style={styles.registerText}>
              I already have an account
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },

  header: {
    paddingHorizontal: 30,
    marginTop: 60,
    marginBottom: 30,
  },

  bankName: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#CBD5E1',
    marginTop: 8,
    fontSize: 14,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 20,
  },

  label: {
    color: '#334155',
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 15,
    marginBottom: 18,
  },

  loginButton: {
    backgroundColor: '#0F172A',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  registerText: {
    textAlign: 'center',
    marginTop: 25,
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '600',
  },

});
