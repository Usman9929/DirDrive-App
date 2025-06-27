import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const API_URL = 'http://192.168.43.98:3000/users'; 

const CustomerLoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get(`${API_URL}?email=${email}&password=${password}`);

      if (response.data.length > 0) {
        navigation.navigate('CustomerBottomTabs'); // successful login
      } else {
        Alert.alert('Login Failed', 'Email or Password is incorrect');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to server');
      console.error(error);
    }
  };

  const handleSignup = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/customer-background-image.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>User Login</Text>
        <Text style={styles.subtitle}>Enter your Email and password to{"\n"}access your user account.</Text>

        <View style={styles.formGroup}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.formGroup}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.loginButton,
            pressed && styles.buttonPressed
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e665e',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 24,
  },
  formGroup: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#2e665e',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#666',
    fontSize: 15,
  },
  signupText: {
    color: '#2e665e',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default CustomerLoginScreen;
