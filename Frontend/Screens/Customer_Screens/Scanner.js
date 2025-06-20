// ScannerScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';

const ScannerScreen = ({ navigation }) => {
  const [scanned, setScanned] = useState(false);

  const handleBarCodeRead = ({ data }) => {
    if (!scanned) {
      setScanned(true);

      Alert.alert("QR Code Scanned", `Data: ${data}`, [
        {
          text: "OK",
          onPress: () => {
            // Replace this with your JazzCash/EasyPaisa API call logic
            console.log("Send payment request with QR code:", data);
            navigation.goBack();
            setScanned(false); // Reset if user wants to scan again
          }
        }
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        onBarCodeRead={handleBarCodeRead}
        androidCameraPermissionOptions={{
          title: 'Camera Permission',
          message: 'App needs camera to scan QR code',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        }}
      >
        <View style={styles.focusBox}>
          <Text style={styles.scanningText}>Align QR Code Within Frame</Text>
        </View>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  focusBox: {
    position: 'absolute',
    top: '40%',
    left: '10%',
    right: '10%',
    height: 200,
    borderWidth: 2,
    borderColor: '#00FF00',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanningText: {
    color: '#fff',
    fontSize: 16,
    position: 'absolute',
    bottom: -30,
  },
});

export default ScannerScreen;
