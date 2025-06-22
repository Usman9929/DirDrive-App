import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  PermissionsAndroid,
  Platform,
  Modal,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const ORS_API_KEY = '5b3ce3597851110001cf624879ccf9c4249e422783f195a3cc734859';
const BASE_FARE = 50;
const RATE_PER_KM = 100;

const BookRideScreen = () => {
  const navigation = useNavigation();
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [showScanner, setShowScanner] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [calculatedDistance, setCalculatedDistance] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const canCalculate = pickupLocation.trim() !== '' && dropoffLocation.trim() !== '';
  const totalFare = calculatedDistance
    ? BASE_FARE + calculatedDistance * RATE_PER_KM
    : 0;

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      setHasCameraPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
    } else {
      setHasCameraPermission(true);
    }
  };

  const getCoordinates = async (locationName) => {
    const response = await axios.get('https://api.openrouteservice.org/geocode/search', {
      params: {
        api_key: ORS_API_KEY,
        text: locationName,
        size: 1,
      },
    });

    const coordinates = response.data.features[0]?.geometry?.coordinates;
    if (!coordinates) throw new Error(`Coordinates not found for: ${locationName}`);
    return coordinates;
  };

  const getDistance = async () => {
    try {
      const startCoords = await getCoordinates(pickupLocation);
      const endCoords = await getCoordinates(dropoffLocation);

      const response = await axios.post(
        'https://api.openrouteservice.org/v2/matrix/driving-car',
        {
          locations: [startCoords, endCoords],
          metrics: ['distance'],
        },
        {
          headers: {
            Authorization: ORS_API_KEY,
            'Content-Type': 'application/json',
          },
        }
      );

      const distanceInMeters = response.data.distances?.[0]?.[1];
      const distanceInKm = parseFloat((distanceInMeters / 1000).toFixed(2));
      setCalculatedDistance(distanceInKm);
    } catch (error) {
      console.error(error);
      setCalculatedDistance(null);
    }
  };

  const handleScanPress = async () => {
    await requestCameraPermission();
    if (hasCameraPermission) setShowScanner(true);
  };

  const handleBookRide = () => {
    if (calculatedDistance !== null) {
      setShowSuccessModal(true);
    }
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
            value={pickupLocation}
            onChangeText={setPickupLocation}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.locationIcon}>🛑</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Enter drop-off location"
            placeholderTextColor="#888"
            value={dropoffLocation}
            onChangeText={setDropoffLocation}
          />
        </View>
        <Pressable
          style={[styles.scanButton, !canCalculate && { opacity: 0.5 }]}
          onPress={getDistance}
          disabled={!canCalculate}
        >
          <Text style={styles.scanButtonText}>📏 Calculate Distance</Text>
        </Pressable>
      </View>

      {/* Bike Service Info */}
      <View style={styles.card}>
        <Text style={styles.cardHeader}>🏍️ Bike Service</Text>
        <Text style={styles.serviceText}>• 5-10 min wait time</Text>
        <Text style={styles.serviceText}>• Rs. 100 per km</Text>
        <Text style={styles.serviceText}>• Helmet provided</Text>
      </View>

      {/* Payment */}
      <Text style={styles.sectionTitle}>Payment Method</Text>
      <View style={styles.paymentRow}>
        <PaymentButton title="Cash" />
        <PaymentButton title="JazzCash" />
        <PaymentButton title="EasyPaisa" />
      </View>

      {(paymentMethod === 'JazzCash' || paymentMethod === 'EasyPaisa') && (
        <View style={styles.card}>
          <Text style={styles.serviceText}>
            {paymentMethod} Account: {paymentMethod === 'JazzCash' ? '0300-1234567' : '0345-9876543'}
          </Text>
          <Pressable style={styles.scanButton} onPress={handleScanPress}>
            <Text style={styles.scanButtonText}>📷 Scan QR Code</Text>
          </Pressable>
        </View>
      )}

      {/* Scanner */}
      {showScanner && hasCameraPermission && (
        <View style={styles.scannerBox}>
          <RNCamera
            style={styles.camera}
            onBarCodeRead={() => setShowScanner(false)}
            captureAudio={false}
          />
        </View>
      )}

      {/* Fare Estimate */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Fare Estimate</Text>
        <View style={styles.fareRow}>
          <Text style={styles.fareLabel}>Base Fare</Text>
          <Text style={styles.fareValue}>Rs. {calculatedDistance ? BASE_FARE : 0}</Text>
        </View>
        <View style={styles.fareRow}>
          <Text style={styles.fareLabel}>Distance</Text>
          <Text style={styles.fareValue}>
            {calculatedDistance ? `${calculatedDistance} km` : '0 km'}
          </Text>
        </View>
        <View style={styles.fareRow}>
          <Text style={[styles.fareLabel, { fontWeight: 'bold' }]}>Estimated Total</Text>
          <Text style={[styles.fareValue, { fontWeight: 'bold' }]}>
            Rs. {calculatedDistance ? totalFare.toFixed(0) : '0'}
          </Text>
        </View>
      </View>

      {/* Book Ride Button */}
      <Pressable
        style={[
          styles.bookButton,
          (!canCalculate || calculatedDistance === null) && { opacity: 0.5 },
        ]}
        disabled={!canCalculate || calculatedDistance === null}
        onPress={handleBookRide}
      >
        <Text style={styles.bookButtonText}>🏍️ Book Bike Ride</Text>
      </Pressable>

      {/* Success Modal */}
      <Modal
        visible={showSuccessModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>✅ Ride Booked!</Text>
            <Text style={{ marginTop: 10, textAlign: 'center' }}>
              Thanks for using our service. Click OK to see your rides.
            </Text>
            <Pressable
              style={[styles.bookButton, { marginTop: 20 }]}
              onPress={() => {
                setShowSuccessModal(false);
                navigation.navigate('MyRides');
              }}
            >
              <Text style={styles.bookButtonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#F9F9F9', flex: 1 },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  inputBox: { backgroundColor: '#fff', borderRadius: 10, padding: 15, marginBottom: 15 },
  inputRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  locationIcon: { marginRight: 10, fontSize: 16 },
  inputText: { fontSize: 15, color: '#666', flex: 1 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15 },
  cardHeader: { fontWeight: 'bold', fontSize: 16, marginBottom: 8 },
  serviceText: { fontSize: 14, marginBottom: 4, color: '#555' },
  sectionTitle: { fontSize: 15, fontWeight: '600', marginBottom: 10 },
  paymentRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  paymentButton: {
    flex: 1, paddingVertical: 10, marginHorizontal: 5, backgroundColor: '#eee',
    borderRadius: 6, alignItems: 'center',
  },
  selectedPaymentButton: { backgroundColor: '#e2e6ff', borderColor: '#5c6bc0', borderWidth: 1 },
  paymentText: { color: '#333' },
  selectedPaymentText: { color: '#3949ab', fontWeight: 'bold' },
  fareRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 },
  fareLabel: { color: '#444' },
  fareValue: { color: '#444' },
  bookButton: {
    marginTop: 10, backgroundColor: '#bcbdfb', paddingVertical: 12,
    borderRadius: 8, alignItems: 'center',
  },
  bookButtonText: { color: '#5c6bc0', fontWeight: 'bold', fontSize: 16 },
  scanButton: {
    marginTop: 10, backgroundColor: '#f2f2f2', paddingVertical: 10,
    borderRadius: 6, alignItems: 'center',
  },
  scanButtonText: { color: '#333', fontWeight: '600' },
  scannerBox: { flex: 1, height: 300, marginBottom: 20, borderRadius: 10, overflow: 'hidden' },
  camera: { flex: 1 },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
});

export default BookRideScreen;
