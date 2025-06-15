import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ImageBackground, StyleSheet, Pressable, Image } from 'react-native';
import { Dialog, Portal, Button, Provider } from 'react-native-paper';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleSelection = (type) => {
    hideDialog();
    if (type === 'Biker') {
      navigation.navigate('Biker');
    } else if (type === 'Customer') {
      navigation.navigate('Customer');
    }
  };

  return (
    <Provider>
      <ImageBackground
        source={require('../assets/images/background-image.jpg')} // Replace with your image path
        style={styles.background}
      >
        <View style={styles.card}>
          <Image source={require('../assets/images/bike-logo.png')} style={styles.logo} />
          <Text style={styles.title}>Dir Drive</Text>
          <Text style={styles.description}>
            Welcome to DirDrive – your reliable bike ride service in Timergara.
            Fast, safe, and affordable travel at your fingertips.
          </Text>

          <Pressable style={styles.button} onPress={showDialog}>
            <Text style={styles.buttonText}>Select Your Type</Text>
          </Pressable>
        </View>

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog} style={styles.dialogContainer}>
            <Dialog.Title style={styles.dialogTitle}>Join As</Dialog.Title>
            <Dialog.Content style={styles.dialogContent}>
              <View style={styles.optionsContainer}>
                <Pressable
                  style={[styles.optionButton, styles.bikerOption]}
                  onPress={() => handleSelection('Biker')}
                >
                  <Text style={styles.optionText}>🚀 Biker</Text>
                  <Text style={styles.optionSubText}>I want to provide rides</Text>
                </Pressable>

                <Pressable
                  style={[styles.optionButton, styles.customerOption]}
                  onPress={() => handleSelection('Customer')}
                >
                  <Text style={styles.optionText}>👋 Customer</Text>
                  <Text style={styles.optionSubText}>I need a bike ride</Text>
                </Pressable>
              </View>
            </Dialog.Content>
          </Dialog>
        </Portal>
      </ImageBackground>
    </Provider>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingBottom: 60,
    paddingRight: 15,
    paddingLeft: 15,
    alignItems: 'center',
    marginBottom: 60,
    marginRight: 15,
    marginLeft: 15
  },
  logo: {
    width: 250,
    height: 250,
    marginLeft: 30,
    marginBottom: -70,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#2e665e',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  // Enhanced dialog styles
  dialogContainer: {
    borderRadius: 20,
    backgroundColor: '#f8f9fa',
    paddingBottom: 15,
  },
  dialogTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e665e',
    paddingTop: 20,
  },
  dialogContent: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  optionsContainer: {
    marginTop: 10,
  },
  optionButton: {
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bikerOption: {
    backgroundColor: '#e3f2fd',
    borderColor: '#bbdefb',
    borderWidth: 1,
  },
  customerOption: {
    backgroundColor: '#e8f5e9',
    borderColor: '#c8e6c9',
    borderWidth: 1,
  },
  optionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e665e',
    marginBottom: 5,
  },
  optionSubText: {
    fontSize: 14,
    color: '#555',
  },
});

export default WelcomeScreen;