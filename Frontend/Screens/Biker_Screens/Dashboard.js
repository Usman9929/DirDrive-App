import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const rideRequests = [
  {
    id: 1,
    name: 'Waqas Kamal',
    time: '3 min ago',
    pickup: 'DHQ Hospital',
    dropoff: 'Timergara Main Ada',
    distance: '0.6 km',
    price: 'Rs.100',
    avatar: require('../../assets/images/profile.jpg'),
  },
  {
    id: 2,
    name: 'Sajeel Abbas',
    time: '10 min ago',
    pickup: 'Main Ada',
    dropoff: 'Shingry Bala',
    distance: '0.8 km',
    price: 'Rs.150',
    avatar: require('../../assets/images/profile1.png'),
  },
];

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Ride Requests</Text>
      <ScrollView style={styles.scrollArea}>
        {rideRequests.map((ride) => (
          <View key={ride.id} style={styles.card}>
            <View style={styles.rowSpaceBetween}>
              <View style={styles.row}>
                <Image source={ride.avatar} style={styles.avatar} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.name}>{ride.name}</Text>
                </View>
              </View>
              <Text style={styles.time}>{ride.time}</Text>
            </View>

            <View style={styles.locationRow}>
              <Image source={require('../../assets/icons/orange_dot.png')} style={styles.dotIcon} />
              <Text style={styles.locationText}>{ride.pickup}</Text>
            </View>
            <View style={styles.locationRow}>
              <Image source={require('../../assets/icons/green_dot.png')} style={styles.dotIcon} />
              <Text style={styles.locationText}>{ride.dropoff}</Text>
            </View>

            <View style={styles.rowSpaceBetween}>
              <Text style={styles.distance}>{ride.distance}</Text>
              <Text style={styles.price}>{ride.price}</Text>
            </View>

            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.rejectButton}>
                <Text style={styles.rejectText}>Reject</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.acceptButton}>
                <Text style={styles.acceptText}>Accept</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={styles.activeCard}>
          <Text style={styles.activeTitle}>Active Rides</Text>
          <View style={styles.emptyBox}>
            <Image source={require('../../assets/icons/box.png')} style={styles.emptyIcon} />
            <Text style={styles.emptyText}>No active rides currently</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  scrollArea: { flex: 1 },
  card: {
    backgroundColor: '#fff',
    elevation: 3,
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: { fontWeight: 'bold', fontSize: 16 },
  rating: { fontSize: 14, color: '#444', marginTop: 2 },
  time: { fontSize: 12, color: '#888' },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  dotIcon: {
    width: 10,
    height: 10,
    marginRight: 6,
  },
  locationText: { color: '#444' },
  distance: { fontSize: 13, color: '#888' },
  price: { fontSize: 14, color: '#4CAF50', fontWeight: 'bold' },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  rejectButton: {
    borderColor: '#f44336',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  rejectText: { color: '#f44336', fontWeight: 'bold' },
  acceptButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  acceptText: { color: '#fff', fontWeight: 'bold' },
  activeCard: {
    marginTop: 20,
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#fafafa',
    elevation: 1,
  },
  activeTitle: { fontWeight: 'bold', marginBottom: 10 },
  emptyBox: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  emptyIcon: {
    width: 40,
    height: 40,
    tintColor: '#bbb',
  },
  emptyText: { color: '#aaa', marginTop: 5 },
  navbar: {
    height: 50,
    borderTopWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: '#999',
  },
  navIconActive: {
    width: 24,
    height: 24,
    tintColor: '#4CAF50',
  },
});
