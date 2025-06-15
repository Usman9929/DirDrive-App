import React ,{useState}from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ImageBackground } from 'react-native';

const BikerLoginScreen = () => {
  const [cnic, setCnic] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login attempted with CNIC:', cnic);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background-image.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Biker Login</Text>
        <Text style={styles.subtitle}>Enter your CNIC and password to access your rider account.</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>CNIC</Text>
          <TextInput
            style={styles.input}
            placeholder="xxxxx-xxxxxxx-x"
            value={cnic}
            onChangeText={setCnic}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.divider} />

        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>

        <Text style={styles.footerText}>
          Only approved bikers can log in. Don't have an account? 
          <Text style={styles.linkText}> Apply to become a rider.</Text>
        </Text>
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
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e665e',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  loginButton: {
    backgroundColor: '#2e665e',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  },
  linkText: {
    color: '#2e665e',
    fontWeight: 'bold',
  },
});

export default BikerLoginScreen;