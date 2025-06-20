import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  PermissionsAndroid,
  Platform,
  Alert
} from 'react-native';
import { RNCamera } from 'react-native-camera';

const BookRideScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [showScanner, setShowScanner] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera access to scan QR codes.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        setHasCameraPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Permission Denied', 'Camera access is needed for QR scanning.');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      setHasCameraPermission(true);
    }
  };

  const onBarCodeRead = (e) => {
    setShowScanner(false);
    Alert.alert('QR Code Scanned', `Data: ${e.data}`);

    // TODO: Call your payment request API with e.data if needed
  };

  const PaymentButton = ({ title }) => (
    <Pressable
      style={[
        styles.paymentButton,
        paymentMethod === title && styles.selectedPaymentButton,
      ]}
      onPress={() => setPaymentMethod(title)}
    >
      <Text
        style={[
          styles.paymentText,
          paymentMethod === title && styles.selectedPaymentText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );

  const handleScanPress = async () => {
    await requestCameraPermission();
    if (hasCameraPermission) setShowScanner(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🏍️ Book Bike Ride</Text>

      {/* Location Inputs */}
      <View style={styles.inputBox}>
        <View style={styles.inputRow}>
          <Text style={styles.locationIcon}>📍</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Enter pickup location"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.locationIcon}>🛑</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Enter drop-off location"
            placeholderTextColor="#888"
          />
        </View>
      </View>

      {/* Bike Service Info */}
      <View style={styles.card}>
        <Text style={styles.cardHeader}>🏍️ Bike Service</Text>
        <Text style={styles.serviceText}>• 5-10 min wait time</Text>
        <Text style={styles.serviceText}>• Rs. 10 per km</Text>
        <Text style={styles.serviceText}>• Helmet provided</Text>
      </View>

      {/* Payment Methods */}
      <Text style={styles.sectionTitle}>Payment Method</Text>
      <View style={styles.paymentRow}>
        <PaymentButton title="Cash" />
        <PaymentButton title="JazzCash" />
        <PaymentButton title="EasyPaisa" />
      </View>

      {paymentMethod === 'JazzCash' && (
        <View style={styles.card}>
          <Text style={styles.serviceText}>JazzCash Account: 0300-1234567</Text>
          <Pressable style={styles.scanButton} onPress={handleScanPress}>
            <Text style={styles.scanButtonText}>📷 Scan QR Code</Text>
          </Pressable>
        </View>
      )}

      {paymentMethod === 'EasyPaisa' && (
        <View style={styles.card}>
          <Text style={styles.serviceText}>EasyPaisa Account: 0345-9876543</Text>
          <Pressable style={styles.scanButton} onPress={handleScanPress}>
            <Text style={styles.scanButtonText}>📷 Scan QR Code</Text>
          </Pressable>
        </View>
      )}

      {/* QR Scanner */}
      {showScanner && hasCameraPermission && (
        <View style={styles.scannerBox}>
          <RNCamera
            style={styles.camera}
            onBarCodeRead={onBarCodeRead}
            captureAudio={false}
          />
        </View>
      )}

      {/* Fare Estimate */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Fare Estimate</Text>
        <View style={styles.fareRow}>
          <Text style={styles.fareLabel}>Base Fare</Text>
          <Text style={styles.fareValue}>Rs. 50</Text>
        </View>
        <View style={styles.fareRow}>
          <Text style={styles.fareLabel}>Distance (approx. 5km)</Text>
          <Text style={styles.fareValue}>Rs. 50</Text>
        </View>
        <View style={styles.fareRow}>
          <Text style={[styles.fareLabel, { fontWeight: 'bold' }]}>Estimated Total</Text>
          <Text style={[styles.fareValue, { fontWeight: 'bold' }]}>Rs. 100</Text>
        </View>
      </View>

      {/* Book Ride Button */}
      <Pressable style={styles.bookButton}>
        <Text style={styles.bookButtonText}>🏍️ Book Bike Ride</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9F9F9',
    flex: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationIcon: {
    marginRight: 10,
    fontSize: 16,
  },
  inputText: {
    fontSize: 15,
    color: '#666',
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  serviceText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  paymentButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#eee',
    borderRadius: 6,
    alignItems: 'center',
  },
  selectedPaymentButton: {
    backgroundColor: '#e2e6ff',
    borderColor: '#5c6bc0',
    borderWidth: 1,
  },
  paymentText: {
    color: '#333',
  },
  selectedPaymentText: {
    color: '#3949ab',
    fontWeight: 'bold',
  },
  fareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  fareLabel: {
    color: '#444',
  },
  fareValue: {
    color: '#444',
  },
  bookButton: {
    marginTop: 20,
    backgroundColor: '#bcbdfb',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#5c6bc0',
    fontWeight: 'bold',
    fontSize: 16,
  },
  scanButton: {
    marginTop: 10,
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  scanButtonText: {
    color: '#333',
    fontWeight: '600',
  },
  scannerBox: {
    flex: 1,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  camera: {
    flex: 1,
  },
});

export default BookRideScreen;
