import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

const MyRidesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>My Rides</Text>

      {/* Ongoing Ride */}
      <View style={styles.ongoingCard}>
        <Text style={styles.ongoingTitle}>🚗 Ongoing Ride</Text>
        <Text><Text style={styles.label}>Pickup:</Text> Main Bazaar, Timergara</Text>
        <Text><Text style={styles.label}>Drop-off:</Text> DHQ Hospital</Text>
        <Text><Text style={styles.label}>Biker:</Text> Kashif Khan</Text>
        <Text><Text style={styles.label}>Bike No:</Text> LEE 1234</Text>
        <Text><Text style={styles.label}>Status:</Text> <Text style={styles.status}>On the way</Text></Text>

        <View style={styles.buttonRow}>
          <Pressable style={styles.trackButton}>
            <Text style={styles.trackText}>Track Ride</Text>
          </Pressable>
          <Pressable style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
        </View>
      </View>

      {/* Ride History Title */}
      <Text style={styles.historyTitle}>📋 Ride History</Text>

      {/* Ride 1 - Completed */}
      <View style={styles.historyCard}>
        <Text style={styles.date}>May 9, 2025</Text>
        <Text style={styles.statusCompleted}>Completed</Text>
        <Text>From: Timergara Market</Text>
        <Text>To: General Hospital</Text>
        <Text>Fare: Rs. 240</Text>
        <Text>Rating: ⭐ 5</Text>
      </View>

      {/* Ride 2 - Cancelled */}
      <View style={styles.historyCard}>
        <Text style={styles.date}>May 8, 2025</Text>
        <Text style={styles.statusCancelled}>Cancelled</Text>
        <Text>From: Main Chowk</Text>
        <Text>To: University Road</Text>
        <Text>Fare: —</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  ongoingCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 20,
  },
  ongoingTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  status: {
    color: 'green',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  trackButton: {
    backgroundColor: 'green',
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'red',
    flex: 1,
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  trackText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cancelText: {
    color: 'white',
    fontWeight: 'bold',
  },
  historyTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  historyCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 1,
    marginBottom: 15,
  },
  date: {
    color: '#999',
    marginBottom: 5,
  },
  statusCompleted: {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statusCancelled: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default MyRidesScreen;
