import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';

const RideDetailScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.rideId}>RideID: RIDE-7890</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>Completed</Text>
        </View>
      </View>
      <Text style={styles.date}>May 15, 2023 • 10:30 AM</Text>

      {/* Customer */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Customer</Text>
        <View style={styles.customerRow}>
          <Image
            source={require('../../assets/images/profile1.png')}
            style={styles.avatar}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.customerName}>Malik Zain</Text>
            <Text style={styles.rating}>⭐ 4.8   +234 812 345 6789</Text>
          </View>
          <Pressable style={styles.callBtn}>
            <Text style={styles.callText}>📞</Text>
          </Pressable>
        </View>
      </View>

      {/* Route */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Route</Text>
        <View style={styles.routeRow}>
          <View style={styles.dot} />
          <View>
            <Text style={styles.time}>10:35 AM</Text>
            <Text style={styles.location}>Gur Gury Chowk Block C</Text>
          </View>
        </View>
        <Text style={styles.routeDetail}>1 km • 10 min</Text>
        <View style={styles.routeRow}>
          <View style={[styles.dot, { backgroundColor: 'green' }]} />
          <View>
            <Text style={styles.time}>10:55 AM</Text>
            <Text style={styles.location}>DHQ Hospital</Text>
          </View>
        </View>
        <Image
          source={require('../../assets/images/dhq.jpeg')}
          style={styles.routeImage}
        />
      </View>

      {/* Payment */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Payment</Text>
        <View style={styles.paymentRow}>
          <View>
            <Text style={styles.label}>Fare</Text>
            <Text style={styles.amount}>RS.200</Text>
          </View>
          <View>
            <Text style={styles.label}>Method</Text>
            <Text style={styles.amount}>Cash • Paid</Text>
          </View>
        </View>
      </View>

      {/* Rating */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Your Rating</Text>
        <Text style={styles.starText}>⭐⭐⭐⭐⭐</Text>
        <Text style={styles.comment}>
          "Excellent rider! Very professional and arrived on time."
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rideId: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  statusBadge: {
    backgroundColor: '#d4f5e9',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusText: {
    color: 'green',
    fontWeight: '600',
    fontSize: 13,
  },
  date: {
    color: '#555',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  customerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    marginRight: 10,
    borderRadius: 24,
  },
  customerName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  rating: {
    color: '#666',
    fontSize: 13,
  },
  callBtn: {
    backgroundColor: '#d4f5e9',
    padding: 8,
    borderRadius: 50,
  },
  callText: {
    fontSize: 16,
    color: 'green',
  },
  routeRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    marginRight: 10,
    marginTop: 5,
  },
  time: {
    fontSize: 13,
    color: '#444',
  },
  location: {
    fontSize: 14,
    color: '#000',
  },
  routeDetail: {
    alignSelf: 'center',
    color: '#888',
    marginBottom: 10,
  },
  routeImage: {
    height: 120,
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 13,
    color: '#888',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  starText: {
    fontSize: 20,
    color: '#FFD700',
    marginBottom: 5,
  },
  comment: {
    color: '#555',
    fontStyle: 'italic',
  },
});

export default RideDetailScreen;
