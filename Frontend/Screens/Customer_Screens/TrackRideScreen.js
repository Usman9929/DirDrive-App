import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const TrackRideScreen = () => {
  const bikerLocation = {
    latitude: 34.6279, // Example coordinates
    longitude: 71.9725,
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Track Ride</Text>
      </View>

      {/* Map View */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: bikerLocation.latitude,
          longitude: bikerLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={bikerLocation}
          title="Biker Location"
          description="En route to pickup"
        />
      </MapView>

      {/* Biker Info */}
      <View style={styles.infoCard}>
        <Text style={styles.bold}>Biker: Kashif Khan</Text>
        <Text>Bike No: LEE 1234</Text>
        <Text>ETA: 3 mins</Text>
        <Text>Status: En route to pickup</Text>

        <View style={styles.buttonRow}>
          <Pressable style={styles.callBtn}>
            <Text style={styles.btnText}>Call Biker</Text>
          </Pressable>
          <Pressable style={styles.cancelBtn}>
            <Text style={styles.btnText}>Cancel Ride</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    backgroundColor: '#2ecc71',
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  map: {
    flex: 1,
  },
  infoCard: {
    padding: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },
  bold: { fontWeight: 'bold' },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  callBtn: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
  },
  cancelBtn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TrackRideScreen;
