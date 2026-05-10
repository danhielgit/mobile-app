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

const RegisterScreen = () => {

  const router = useRouter();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log("Register:", {
      firstname,
      lastname,
      phone,
      address,
      country,
      email,
      password
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <ScrollView>

        <View style={styles.header}>
          <Text style={styles.bankName}>NovaBank</Text>
          <Text style={styles.subtitle}>Create your account</Text>
        </View>

        <View style={styles.card}>

          <Text style={styles.title}>Register</Text>

          {/* FIRSTNAME */}
          <Text style={styles.label}>First Name</Text>
          <TextInput style={styles.input} value={firstname} onChangeText={setFirstname} />

          {/* LASTNAME */}
          <Text style={styles.label}>Last Name</Text>
          <TextInput style={styles.input} value={lastname} onChangeText={setLastname} />

          {/* PHONE */}
          <Text style={styles.label}>Mobile Phone</Text>
          <TextInput style={styles.input} keyboardType="phone-pad" value={phone} onChangeText={setPhone} />

          {/* ADDRESS */}
          <Text style={styles.label}>Address</Text>
          <TextInput style={styles.input} value={address} onChangeText={setAddress} />

          {/* COUNTRY */}
          <Text style={styles.label}>Country</Text>
          <TextInput style={styles.input} value={country} onChangeText={setCountry} />

          {/* EMAIL */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* PASSWORD */}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

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
          <TouchableOpacity
            onPress={() => router.replace("/")}
          >
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